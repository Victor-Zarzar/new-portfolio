<h1 align="center" id="header">
  New Portfolio - Full Stack Application (NextJS)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
</p>

<p align="center">
  Modern portfolio application built with Next.js 15, featuring internationalization, dark mode, and containerized deployment.
</p>

---

<h2 id="stack">
🤖 Tech Stack
</h2>

<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" width="48" title="HTML5"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TailwindCSS-Dark.svg" width="48" title="TailwindCSS">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/React-Dark.svg" width="48" title="React.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="48" title="TypeScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NextJS-Dark.svg" width="48" title="Next.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Vercel-Dark.svg" width="48" title="Vercel">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Docker.svg" width="48" title="Docker">
</p>

### Core Technologies

-   🟦 **TypeScript** - Type-safe development
-   ⚛️ **React 19** - Latest React features
-   🌐 **Next.js 15** - React framework with App Router
-   🎨 **Tailwind CSS v4** - Utility-first CSS framework
-   🐳 **Docker** - Containerized deployment

### Features & Integrations

-   🛡️ **Zod & React Hook Form** - Form validation and management
-   🧩 **Shadcn UI** - Beautiful and accessible components
-   🌗 **Dark Mode** - Theme switching with Next Themes
-   🌍 **i18n** - Multi-language support (EN / PT-BR / ES) via Next Intl
-   📬 **Nodemailer** - Email functionality
-   📈 **Vercel Analytics** - Performance monitoring

---

<h2 id="prerequisites">
📋 Prerequisites
</h2>

Before starting, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [pnpm](https://pnpm.io/) (v8 or higher)
-   [Docker](https://www.docker.com/) & Docker Compose (for containerized deployment)
-   [Git](https://git-scm.com/)

---

<h2 id="installation">
⚙️ Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/new-portfolio
cd new-portfolio
```

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
NEXT_PUBLIC_DISABLE_DEVTOOLS=true
```

> **Note:** For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833).

### 3. Install Dependencies

```bash
make install
```

Or manually with pnpm:

```bash
pnpm install
```

---

<h2 id="usage">
🚀 Usage
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
📝 Makefile Commands Reference
</h2>

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `make install` | Install dependencies using pnpm          |
| `make dev`     | Run the app locally in development mode  |
| `make build`   | Build the Docker image                   |
| `make run`     | Build and run the Docker container       |
| `make stop`    | Stop and remove the container            |
| `make clean`   | Clean Docker environment and build files |
| `make logs`    | Display container logs in real-time      |
| `make shell`   | Access container shell (sh)              |
| `make help`    | Show all available commands              |

---

<h2 id="development">
🛠️ Development
</h2>

### Code Linting

Run ESLint to check for code issues:

```bash
pnpm run lint
```

### Type Checking

Run TypeScript type checking:

```bash
pnpm run type-check
```

### Build for Production

```bash
pnpm run build
```

---

<h2 id="project-structure">
📁 Project Structure
</h2>

```
new-portfolio/
├── app/                 # Next.js App Router
├── components/          # React components
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Global styles
├── .env                 # Environment variables
├── Dockerfile           # Docker configuration
├── Makefile             # Build automation
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

---

<h2 id="screenshots">
📸 Screenshots
</h2>

<p align="center">
  <img src="https://github.com/user-attachments/assets/cab8f356-ae88-4d9f-bd90-dbc0c61e6265" width="1000" height="600" alt="Home Page">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f76a4f39-dc46-4fac-b604-1c647495e957" width="1000" height="600" alt="Projects Section">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/86abbd0b-b2b5-4c5e-a952-261c5691834d" alt="Dark Mode" width="1000" height="500">
</p>

---

<h2 id="deployment">
🌐 Deployment
</h2>

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Victor-Zarzar/new-portfolio)

### Docker Production

```bash
docker build -t new-portfolio:production .
docker run -d -p 3000:3000 --name new-portfolio-prod new-portfolio:production
```

---

<h2 id="contributing">
🤝 Contributing
</h2>

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="license">
📄 License
</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="contact">
📧 Contact
</h2>

Victor Zarzar - [@Victor-Zarzar](https://github.com/Victor-Zarzar)

Project Link: [https://github.com/Victor-Zarzar/new-portfolio](https://github.com/Victor-Zarzar/new-portfolio)

---

<p align="center">
  Made with ❤️ by Victor Zarzar
</p>
