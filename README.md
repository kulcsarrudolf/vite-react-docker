# ⚡ Vite + React + TypeScript + Docker

A fast, modern, and production-ready frontend boilerplate using Vite, React, and TypeScript — fully containerized with Docker and supporting multiple environments (`development`, `staging`, `production`).

---

## 📦 Tech Stack

- **Vite** for lightning-fast bundling
- **React + TypeScript** for modern frontend development
- **Docker** for easy containerization and environment configuration
- **Nginx** to serve production builds
- **Environment support** for `development`, `staging`, and `production`

---

## 🌐 Environment Setup

Environment variables are configured using `.env` files:

- `.env.development`
- `.env.staging`
- `.env.production`

Each must define:

```env
VITE_API_URL=https://your.api.url
```

Vite will pick the correct `.env` file based on the build mode:

- `--mode development`
- `--mode staging`
- `--mode production`

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (uses .env.development)
npm run dev

# Type check
npm run type-check
```

---

## 🐳 Docker Build & Run

### Build Docker Image

```bash
# Replace "development" with "staging" or "production" as needed
docker build --build-arg BUILD_ENV=development -t vite-app-dev .
```

### Run Docker Container

```bash
docker run -p 3000:80 vite-app-dev
```

---

## 📜 Available Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "build:staging": "vite build --mode staging",
  "build:prod": "vite build --mode production",
  "serve:dev": "vite preview --port 5001",
  "serve:staging": "vite preview --port 5002",
  "serve:prod": "vite preview --port 5003",
  "type-check": "tsc --noEmit",
  "docker:build:dev": "docker build -t vite-app-dev --build-arg BUILD_ENV=development .",
  "docker:build:staging": "docker build -t vite-app-staging --build-arg BUILD_ENV=staging .",
  "docker:build:prod": "docker build -t vite-app-prod --build-arg BUILD_ENV=production .",
  "docker:run:dev": "docker run -p 3001:80 vite-app-dev",
  "docker:run:staging": "docker run -p 3002:80 vite-app-staging",
  "docker:run:prod": "docker run -p 3000:80 vite-app-prod"
}
```

---

## 🔍 API URL in React

Access the environment variable in your code like this:

```ts
console.log(import.meta.env.VITE_API_URL);
```

To verify the current build mode:

```ts
console.log(import.meta.env.MODE); // e.g., "development"
```

---

## 🚀 Deployment Notes

- The final build is served via **Nginx**.
- `nginx.conf` is configured to support SPA routing with fallback to `index.html`.
- Docker `ARG BUILD_ENV` controls which `.env.*` file is used at build time.

---

## 📁 File Structure

```
├── src/                # React + TypeScript source code
├── public/             # Static assets
├── Dockerfile
├── nginx.conf
├── .env.development
├── .env.staging
├── .env.production
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 🪪 License

[MIT](./LICENSE)
