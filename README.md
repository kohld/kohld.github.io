# Portfolio Website

[![Deployment](https://github.com/kohld/kohld.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/kohld/kohld.github.io/actions/workflows/deploy.yml)

A modern, accessible portfolio website built with Next.js, featuring a professional project showcase, responsive design, and optimized user experience.

---

## Table of Contents
- [Features](#features)
- [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [License](#license)

---

## Features
- Professional project portfolio with detailed descriptions and technology stacks
- Responsive and mobile-friendly layout
- Accessible navigation and semantic markup
- Contact options (Email, GitHub)
- Collapsible project list for improved UX

## Accessibility
- Keyboard navigable and screen reader optimized
- ARIA labels and roles for all major components
- Skip to content and accessible navigation
- Color contrast and focus indicators

## Technologies Used
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```mermaid
graph TD
    A[kohld.github.io] --> B[app/]
    A --> C[public/]
    A --> D[Configuration Files]
    
    B --> E[layout.tsx]
    B --> F[page.tsx]
    B --> G[globals.css]
    B --> H[components/]
    
    H --> I[header.tsx]
    H --> J[hero.tsx]
    H --> K[about.tsx]
    H --> L[projects.tsx]
    H --> M[contact.tsx]
    H --> N[footer.tsx]
    
    C --> O[favicon.svg]
    C --> P[Static Assets]
    
    D --> Q[next.config.ts]
    D --> R[tailwind.config.ts]
    D --> S[tsconfig.json]
    D --> T[package.json]
    
    F -.imports.-> I
    F -.imports.-> J
    F -.imports.-> K
    F -.imports.-> L
    F -.imports.-> M
    F -.imports.-> N
    
    E -.defines.-> U[Metadata & Layout]
    F -.renders.-> V[Main Page]
    
    style A fill:#007AFF,stroke:#0051D5,color:#fff
    style B fill:#1E1E1E,stroke:#007AFF,color:#fff
    style H fill:#1E1E1E,stroke:#007AFF,color:#fff
    style F fill:#2D2D2D,stroke:#007AFF,color:#fff
```

---

## Getting Started

To run this project locally:

1. **Clone the repository**
    ```sh
    git clone https://github.com/kohld/kohld.github.io.git
    
    cd kohld.github.io
    ```
2. **Install dependencies**
    ```sh
    npm install
    ```
3. **Start the development server**
    ```sh
    npm run dev
    ```
4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

