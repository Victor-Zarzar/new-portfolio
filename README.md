<h1 align="center" id="header">
    My Portfolio (Back for Front application)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/DrizzleORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Neon-000000?style=for-the-badge&logo=neon&logoColor=white" alt="Neon">
  <img src="https://img.shields.io/badge/BetterAuth-000000?style=for-the-badge" alt="Better Auth">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

<p align="center">
  Modern portfolio application built with Next.js 16, featuring internationalization, dark mode, MDX blog powered by PostgreSQL.
</p>

---

<h2 id="stack">
  Tech Stack
</h2>

<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" width="48" title="HTML5"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TailwindCSS-Dark.svg" width="48" title="TailwindCSS">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/React-Dark.svg" width="48" title="React.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="48" title="TypeScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NextJS-Dark.svg" width="48" title="Next.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Vercel-Dark.svg" width="48" title="Vercel">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Docker.svg" width="48" title="Docker">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sentry.svg" width="48" title="Sentry">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/PostgreSQL-Dark.svg" width="48" title="PostgreSQL">
</p>

### Core Technologies

- **TypeScript** - Type-safe development
- **React 19** - Latest React features
- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **Drizzle ORM** - Type-safe ORM for PostgreSQL
- **PostgreSQL** - Serverless PostgreSQL database for blog content
- **Docker** - Optional containerized deployment

### Features & Integrations

- **Blog powered by PostgreSQL** - Articles stored and served via Neon serverless database
- **Drizzle ORM + Drizzle Kit** - Database schema management and migrations
- **Better Auth** - Authentication
- **Zod & React Hook Form** - Form validation and management
- **Shadcn UI** - Beautiful and accessible components
- **Dark Mode** - Theme switching with Next Themes
- **i18n** - Multi-language support (EN / PT-BR / ES) via Next Intl
- **Nodemailer** - Email functionality
- **WebHook Slack** - Slack notifications
- **Sanitize HTML** - XSS protection for user inputs
- **Rate Limiter Flexible** - API endpoint rate limiting and DDoS protection
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Real-time performance metrics
- **Sentry** - Error tracking and performance monitoring
- **GitHub Actions** - Continuous integration and deployment

---

<h2 id="prerequisites">
  Prerequisites
</h2>

Before starting, ensure you have the following installed:

- [Bun](https://bun.sh/docs) (v1 or higher) – primary runtime & package manager
- [Docker](https://www.docker.com/) – optional, for local containerized development (Development and Testing)
- [Git](https://git-scm.com/)

> Optional: [Node.js](https://nodejs.org/) (v22 or higher), if you prefer running the app with Node or using Node-based global tooling.

---

<h2 id="installation">
  Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/my-portfolio
cd my-portfolio
```

### 2. Open in your editor (example: Zed Editor)

```bash
zed .
```

### 3. Environment Configuration

Copy the example environment file and configure your credentials:

```bash
cp .env-example .env
```

Then edit `.env` with your actual values. The `.env-example` file contains detailed comments explaining each variable and how to obtain the necessary credentials.

**Key configurations needed:**

- **SMTP**: Gmail account and [App Password](https://support.google.com/accounts/answer/185833)
- **Sentry**: DSN and authentication token from your [Sentry project](https://sentry.io/)
- **Database**: Neon PostgreSQL connection string from [Neon Console](https://neon.tech/)
- **Website URL**: Your production domain or `http://localhost:3000` for development

> **Important:** Never commit your `.env` file to version control. It's already in `.gitignore`.

### 4. Install Dependencies & Run Migrations (Local)

```bash
make install && make dev
```

Or manually with bun:

```bash
bun install
bun run db:generate
bun run db:migrate
bun run dev
```

Optional: Docker + Build (Local dev):

```bash
make run
make generate
make migrate
```

### 5. Run the automated tests (Isolated Docker container)

```bash
make test
```

Or manually with bun:

```bash
bun test
```

### 6. Code Quality Check

Before starting development, run the linter to ensure code quality (bunx biome check):

```bash
bun lint
```

This command will check for code style issues and potential errors. To automatically fix issues and format your code (bunx biome format --write):

```bash
bun format
```

---

<h2 id="database">
  Database
</h2>

The blog content is stored in a **PostgreSQL database** via [Neon](https://neon.tech/) serverless infrastructure, managed through **Drizzle ORM**.

### Available DB Commands

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `bun run db:generate` | Generate SQL migrations from schema      |
| `bun run db:migrate`  | Apply pending migrations to the database |
| `bun run db:push`     | Push schema changes directly (dev only)  |
| `bun run db:studio`   | Open Drizzle Studio (visual DB explorer) |

### Schema Location

```
lib/
└── db/
    ├── migrations/       # Auto-generated SQL migration files
    │   └── meta/
    └── queries/
        ├── blog.ts       # Blog post queries
        └── index.ts
```

---

<h2 id="usage">
  Usage
</h2>

### Available Commands

View all available Make commands:

```bash
make help
```

### Local Development

Start the development server (port 3000):

```bash
make dev
```

Access the application at `http://localhost:3000`

### Docker Deployment

#### Build and Run

Build the Docker image and start the container:

```bash
make run
```

#### Stop Container

```bash
make stop
```

#### View Logs

```bash
make logs
```

Or directly with Docker:

```bash
docker logs -f new-portfolio
```

#### Access Container Shell

```bash
make shell
```

#### Clean Environment

Remove containers, images, and build artifacts:

```bash
make clean
```

---

<h2 id="screenshots">
  Screenshots
</h2>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7e4f4cd9-8e49-4e57-8453-7a0bc8f7665b" width="1000" height="600" alt="Architecture">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1fbac9fb-838c-4683-bd8f-4075db871080" width="1000" height="600" alt="Projects Section">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0f8d0978-e8f1-4590-bfc0-8f4a48f68156" alt="Dark Mode" width="1000" height="500">
</p>

---

<h2 id="deployment">
   Deployment
</h2>

### Vercel (Recommended - Production)

The application is deployed on Vercel for production use, with Neon PostgreSQL as the database backend.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Victor-Zarzar/new-portfolio)

**Important:** Don't forget to add all environment variables from `.env-example` to your Vercel project settings, including your Neon database connection string.

- **CI/CD Pipeline** - `.github/workflows/main.yaml` for automated checks and builds
- **Dependabot** - Monthly dependency updates for GitHub Actions and Pub packages

---

<h2 id="contributing">Contributing</h2>

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

Report issues at: https://github.com/Victor-Zarzar/my-portoflio/issues

---

<h2 id="license">License</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="author">Author</h2>

Victor Zarzar - [@Victor-Zarzar](https://github.com/Victor-Zarzar)

Project Link: [https://github.com/Victor-Zarzar/my-portoflio](https://github.com/Victor-Zarzar/my-portoflio)

---
