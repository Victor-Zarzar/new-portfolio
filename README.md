<h1 align="center" id="header">
  New Portfolio - (NextJS)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white" alt="MDX">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

<p align="center">
  Modern portfolio application built with Next.js 16, featuring internationalization, dark mode, MDX blog, and containerized deployment.
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
</p>

### Core Technologies

- **TypeScript** - Type-safe development
- **React 19** - Latest React features
- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **MDX** - Markdown with JSX for rich blog content
- **Docker** - Optional containerized deployment

### Features & Integrations

- **MDX Blog** - Write articles using Markdown with React components
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
- **Sentry** - Error tracking and performance monitoring tool
- **GitHub Actions** - Continuous integration and deployment

---

<h2 id="prerequisites">
  Prerequisites
</h2>

Before starting, ensure you have the following installed:

- [Bun](https://bun.sh/docs) (v1 or higher) – primary runtime & package manager
- [Docker](https://www.docker.com/) – optional, for local containerized development
- [Git](https://git-scm.com/)

> Optional: [Node.js](https://nodejs.org/) (v22 or higher), if you prefer running the app with Node or using Node-based global tooling.

---

<h2 id="installation">
  Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/new-portfolio
cd new-portfolio
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
- **Website URL**: Your production domain or `http://localhost:3000` for development

> **Important:** Never commit your `.env` file to version control. It's already in `.gitignore`.

### 4. Install Dependencies

```bash
make install
```

Or manually with bun:

```bash
bun install
```

### 5. Run the automated tests (Isolated Docker container)

```bash
make test
```

Or manually with bun:

```bash
bun test
```

---

<h2 id="blog-architecture">
  Blog Architecture
</h2>

The portfolio includes a multilingual blog system powered by MDX, allowing you to write rich content with embedded React components.

### Content Structure

```
content/
├── en/               # English articles
│   ├── example.mdx
│   └── another-post.mdx
├── pt/               # Portuguese articles
│   ├── exemplo.mdx
│   └── outro-post.mdx
└── es/               # Spanish articles
    ├── ejemplo.mdx
    └── otra-publicacion.mdx
```

### Creating Blog Posts

Each MDX file should include frontmatter metadata at the top:

```mdx
---
title: "Android Security Rules"
description: "Protecting SharedPreferences data"
year: "2025"
date: "2025-12-16"
photo: "/article-android-security.png"
tags: ["android", "mobile", "security"]
---

# Your Article Content

Write your content here using Markdown syntax.

You can also use React components directly in your MDX files!
```

### Multilingual Support

Create the same article in different languages by placing corresponding `.mdx` files in each language folder:

- `content/en/my-article.mdx` - English version
- `content/pt/my-article.mdx` - Portuguese version
- `content/es/my-article.mdx` - Spanish version

The blog automatically serves the correct language version based on the user's locale preference.

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

<h2 id="makefile-commands">
  Makefile Commands Reference
</h2>

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `make install` | Install dependencies using bun                      |
| `make dev`     | Run the app locally in development mode             |
| `make prod`    | Run the app in production mode                      |
| `make build`   | Build the Docker image                              |
| `make run`     | Build and run the Docker container                  |
| `make test`    | Run the automated tests (Isolated Docker container) |
| `make stop`    | Stop and remove the container                       |
| `make clean`   | Clean Docker environment and build files            |
| `make logs`    | Display container logs in real-time                 |
| `make shell`   | Access container shell (sh)                         |
| `make help`    | Show all available commands                         |

---

<h2 id="development">
  Development
</h2>

### Code Linting & Formatting

Check for code issues with Biomejs:

```bash
bun biome check
```

Format all files and apply linting fixes:

```bash
bunx biome format --write
```

This command will automatically format your code according to the project's style rules and fix any auto-fixable linting issues.

### Build for Production

```bash
make prod
```

---

<h2 id="project-structure">
  Project Structure
</h2>

```
new-portfolio/
├── .github/                        # GitHub configuration
│   ├── workflows/                  # GitHub Actions workflows
│   │   ├── main.yaml               # CI/CD pipeline
│   │   └── codeql-analysis.yaml    # Code security analysis
│   └── dependabot.yml              # Dependency updates configuration
├── app/                            # Next.js App Router
├── components/                     # React components
├── content/                        # MDX blog articles
│   ├── en/                         # English articles
│   ├── pt/                         # Portuguese articles
│   └── es/                         # Spanish articles
├── lib/                            # Utility functions
├── public/                         # Static assets
├── styles/                         # Global styles
├── tests/                          # Automated tests
├── .env-example                    # Environment variables template
├── .env                            # Environment variables (not in git)
├── Dockerfile                      # Docker configuration
├── Makefile                        # Build automation
├── next.config.js                  # Next.js configuration
├── bun.lock                        # Bun package lock file
├── tailwind.config.ts              # Tailwind configuration
└── tsconfig.json                   # TypeScript configuration
```

---

<h2 id="screenshots">
  Screenshots
</h2>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7e4f4cd9-8e49-4e57-8453-7a0bc8f7665b" width="1000" height="600" alt="Architecture">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0ef7bc20-8bb1-46fb-b360-b013ccdd4a12" width="1000" height="600" alt="Projects Section">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4284ef66-c192-4985-9eb1-ac2d5758f23d" alt="Dark Mode" width="1000" height="500" alt="Mobile">
</p>

---

<h2 id="deployment">
   Deployment
</h2>

### Vercel (Recommended - Production)

The application is deployed on Vercel for production use.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Victor-Zarzar/new-portfolio)

**Important:** Don't forget to add all environment variables from `.env-example` to your Vercel project settings.

- **CI/CD Pipeline** - `.github/workflows/main.yaml` for automated checks and builds
- **Dependabot** - Monthly dependency updates for GitHub Actions and Pub packages

### Docker (Optional - Local Development)

Docker is available as an optional tool for local containerized development:

```bash
docker build -t new-portfolio:production .
docker run -d -p 3000:3000 --name new-portfolio-prod new-portfolio:production
```

---

<h2 id="contributing">
  Contributing
</h2>

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="license">
  License
</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="contact">
  Contact
</h2>

Victor Zarzar - [@Victor-Zarzar](https://github.com/Victor-Zarzar)

Project Link: [https://github.com/Victor-Zarzar/new-portfolio](https://github.com/Victor-Zarzar/new-portfolio)

---

<p align="center">
  Made with by Victor Zarzar
</p>
