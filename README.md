# pdshelf
## stack
- Frontend: React (TypeScript), PDF.js
- Backend: NestJS/Express, TypeORM/PostgreSQL
- Native Layer: C module Node-API (N-API)
- Storage: Local filesystem (upgradeable to S3)
## initial filestructure
pdf-library-app/
├── backend/                    # NestJS application\n
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
