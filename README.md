<![CDATA[<div align="center">

# 🚀 DevOverflow

### A Full-Stack Developer Community Platform

*A modern, feature-rich developer Q&A and collaboration platform inspired by StackOverflow — built from scratch with Next.js 15, TypeScript, and Tailwind CSS 4.*

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-F7DF1E?style=for-the-badge)](https://turbo.build/pack)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**DevOverflow** is a comprehensive developer community platform designed to mirror the functionality and scale of professional Q&A platforms like StackOverflow. It empowers developers to ask questions, share knowledge, discover job opportunities, explore trending tags, and connect with peers — all within a sleek, modern interface.

This project demonstrates **production-grade full-stack engineering** practices including:

- 🏗️ **Component-driven architecture** with 15+ reusable, isolated UI components
- 🎨 **Multi-theme system** (light/dark mode) using React Context with persistent state
- 🔐 **Complete authentication flows** — Sign In, Sign Up, Forgot Password, and OAuth integration (Google, GitHub, Facebook)
- 🔍 **Advanced search & filtering** with real-time query processing
- 📄 **Server-side rendering** with Next.js 15 App Router for optimal SEO and performance

---

## ✨ Key Features

### 🏠 Core Platform
| Feature | Description |
|---------|-------------|
| **Q&A Forum** | Full question-and-answer system with upvoting, tagging, and threaded discussions |
| **Community Hub** | Discover and join developer communities with member directories |
| **Job Board** | Browse curated job listings with role, salary, and location filters |
| **Tag Explorer** | Navigate questions and content via an intelligent tag taxonomy |
| **Global Search** | Instant search across questions, users, tags, and communities |

### 🔐 Authentication & Security
| Feature | Description |
|---------|-------------|
| **Multi-Provider OAuth** | Sign in via Google, Facebook, or GitHub |
| **Email/Password Auth** | Traditional authentication with email validation |
| **Password Recovery** | Secure forgot password flow with verification |
| **Clerk Integration** | Enterprise-grade auth infrastructure with Clerk |

### 🎨 UI/UX Excellence
| Feature | Description |
|---------|-------------|
| **Dark/Light Mode** | System-wide theme toggle with smooth transitions |
| **Responsive Design** | Pixel-perfect layouts from mobile to ultra-wide displays |
| **Custom Components** | Hand-crafted inputs, cards, buttons, and navigation elements |
| **Pagination** | Smooth, accessible pagination across all data views |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React meta-framework with App Router, SSR, and Turbopack |
| **React 19** | UI component library with latest concurrent features |
| **TypeScript 5** | Type-safe development with strict mode |
| **Tailwind CSS 4** | Utility-first CSS framework for rapid styling |
| **Lucide React** | Modern icon library with tree-shakeable SVG icons |

### Development
| Technology | Purpose |
|-----------|---------|
| **Turbopack** | Next-gen bundler for blazing-fast dev server |
| **ESLint** | Code quality and consistency enforcement |
| **PostCSS** | CSS transformation pipeline |

### Architecture Patterns
- **App Router** — File-based routing with layouts and nested routes
- **Server Components** — Optimized rendering with selective client hydration
- **Context API** — Global state management for theming and auth
- **Component Composition** — Modular, reusable UI building blocks

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│                  Client Layer                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  │  Theme   │ │   Auth   │ │   Search &   │ │
│  │ Context  │ │  Context │ │   Filters    │ │
│  └──────────┘ └──────────┘ └──────────────┘ │
├──────────────────────────────────────────────┤
│               Component Layer                │
│  MainHeader │ Sidebar │ RightSidebar │ Cards │
│  CustomInput│ Pagination│ TagCards │ Filters │
├──────────────────────────────────────────────┤
│                Route Layer                   │
│  /Home │ /Findjobe │ /communities │ /tags    │
│  /authfrontend │ /Signup │ /Forgotpassword   │
├──────────────────────────────────────────────┤
│              Next.js 15 App Router           │
│        Server Components + Turbopack         │
└──────────────────────────────────────────────┘
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Dashboard
> The main dashboard featuring a curated feed of developer questions, community sidebar, and trending tags — with full dark/light mode support.

### 💼 Job Board
> Browse and filter job listings by department, salary range, and location with an intuitive card-based layout.

### 🔐 Authentication
> Clean, modern authentication flow with multi-provider OAuth support (Google, Facebook, GitHub) and Clerk integration.

### 🏷️ Tag Explorer
> Navigate the platform's content through an intelligent tag taxonomy with search and filtering capabilities.

### 👥 Communities
> Discover and join developer communities with member directories and engagement metrics.

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **npm** ≥ 9.0

### Installation

```bash
# Clone the repository
git clone https://github.com/Ahtesham-Shah999/devoverflow.git
cd devoverflow

# Install dependencies
npm install

# Start the development server (with Turbopack)
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack HMR |
| `npm run build` | Create optimized production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint code analysis |

---

## 📁 Project Structure

```
devoverflow/
├── app/
│   ├── Home/                   # Main dashboard page
│   ├── Findjobe/               # Job board with listings
│   ├── authfrontend/           # Authentication pages
│   │   ├── Signinreal/         # Sign-in form
│   │   ├── Signup/             # Registration flow
│   │   └── Forgotpassword/     # Password recovery
│   ├── communities/            # Community discovery
│   ├── tags/                   # Tag taxonomy explorer
│   ├── components/             # Reusable UI components
│   │   ├── MainHeader/         # Global navigation header
│   │   ├── Sidebar/            # Left navigation sidebar
│   │   ├── Rightsidebar/       # Trending tags & hot network
│   │   ├── CustomInput/        # Styled form inputs
│   │   ├── Jobecard/           # Job listing cards
│   │   ├── jobesearch/         # Job search & filters
│   │   ├── filterbuttons/      # Category filter buttons
│   │   ├── pagination/         # Data pagination
│   │   ├── tagcard/            # Tag display cards
│   │   ├── usercard/           # User profile cards
│   │   ├── NoQuestions/        # Empty state component
│   │   ├── Loginwithgitggogle/ # OAuth login buttons
│   │   ├── continuebutton/     # Action buttons
│   │   ├── tagssearchfilter/   # Tag search & filter
│   │   └── themwrapper/        # Theme context wrapper
│   ├── context/                # React Context providers
│   │   └── theme-context.js    # Dark/Light mode state
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── public/                     # Static assets & images
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS plugins
└── package.json                # Dependencies & scripts
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Ahtesham Shah](https://github.com/Ahtesham-Shah999)**

[![GitHub](https://img.shields.io/badge/GitHub-Ahtesham--Shah999-181717?style=for-the-badge&logo=github)](https://github.com/Ahtesham-Shah999)

</div>
]]>
