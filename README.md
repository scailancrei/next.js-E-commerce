# next.js-E-commerce

This project is an e-commerce application built with Next.js 15 and React 19.

## TECH STACK

Frontend: Next.js, Tailwind CSS

Backend: Supabase, Stripe

## LOCAL INSTALLATION (WITHOUT DOCKER)

Follow these steps to run the project on your machine without Docker.

### Requirements

- Node.js (recommended v22.x)
- npm or yarn
- (Optional) Local Supabase instance or a Supabase account for the database

### Install & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/scailancrei/next.js-E-commerce.git
   cd next.js-E-commerce
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the project root with the necessary variables, for example:

   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
   STRIPE_SECRET_KEY=...
   DATABASE_URL=...
   API_PRODUCTS_URL=https://fakestoreapi.com/products
   ```

   **Note:** `API_PRODUCTS_URL` is used to fetch the product list during local development. If the public API is unavailable, consider using local mock data or a local JSON file.

4. Start the app in development mode:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser

## RUNNING WITH DOCKER

This project includes Docker and Docker Compose setup for local development and production builds.

### Requirements

- Docker
- Docker Compose
- Node.js version: 22.13.1 (used in the Dockerfile)

### Services

- **ts-src**: Next.js app (port `3000`)
- **supabase**: PostgreSQL database (port `5432`)
- **stripe-mock**: Stripe API mock server (port `12111`)

### Environment Variables

- The app can use a `.env` file at the project root. Uncomment the `env_file` line in `docker-compose.yml` to enable it.
- Optionally set `API_PRODUCTS_URL` to `https://fakestoreapi.com/products` (used to fetch the product list during development).
- Supabase service uses:
  - `POSTGRES_PASSWORD`: supabase_password
  - `POSTGRES_DB`: supabase_db
  - `POSTGRES_USER`: supabase_user
  - Change these for production use.

### Build & Run

1. Make sure Docker and Docker Compose are installed.
2. (Optional) Create a `.env` file at the project root for app configuration.
3. Start all services:
   ```bash
   docker compose up --build
   ```
   This will build and start the Next.js app, Supabase, and Stripe mock server.

### Special Configuration

- The Next.js app is built from the `./src` directory using the Dockerfile at the project root.
- All services are connected via the `appnet` network for internal communication.
- For persistent Supabase data, uncomment the `volumes` section in `docker-compose.yml`.
- For production, update Supabase credentials and consider using persistent volumes.

### Ports

- Next.js app: `3000`
- Supabase (PostgreSQL): `5432`
- Stripe mock: `12111`

---
