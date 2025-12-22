import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface UsePdfDocumentReturn {
	numPages: number;
	loading: boolean;
	error: string | null;
}

export function usePdfDocument(fileUr1: string): UsePdfDocumentReturn {
	const [numPages, setNumPages] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!fileUr1) return;

		setLoading(true);
		setError(null);

		const loadPdf = async () => {
			try {
				const pdf = await pdfjsLib.getDocument(fileUr1).promise;
				setNumPages(pdf.numPages);
			} catch (err) {
				setError(err instanceof Error ? err.message: 'Failed to load PDF');
			} finally {
				setLoading(false);
			}
		};
		loadPdf();
	}, [fileUr1])

	return {numPages, loading, error};
}
