# pdshelf
## stack
- Frontend: React 18+ (TypeScript) with PDF.js for rendering
- Backend: NestJS (Express alternative noted) with TypeORM/PostgreSQL
- Native Layer: C module via Node-API (N-API) for text extraction & indexing
- Storage: Local filesystem (upgradeable to S3)
- Goal: MVP → Linux desktop packaging
## initial filestructure
pdf-library-app/
├── backend/                    # NestJS application
│   ├── src/
│   │   ├── modules/           # Feature modules
│   │   ├── core/              # Shared services
│   │   ├── native/            # C module integration
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/                   # React TypeScript app
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
└── native-modules/            # C extension
    ├── binding.gyp            # Node-API build config
    ├── src/
    │   └── pdf_extractor.c
    └── package.json
