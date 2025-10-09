# AGENTS.md

Next.js portfolio website using TypeScript, React, Tailwind CSS, Jest, ESLint, and Prettier.

## Setup commands

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Run tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Build for production: `npm run build`
- Format code: `npm run format`
- Lint code: `npm run lint`

## Project structure

- `app/` - Next.js app directory
  - `components/` - React components (kebab-case naming: `hero.tsx`, `fade-in.tsx`)
  - `page.tsx` - Main page
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `tests/components/` - Component tests (matching component names: `hero.test.tsx`)
- `public/` - Static assets
- `.github/workflows/` - CI/CD workflows

## Code style

- TypeScript strict mode enabled
- Component files: kebab-case (e.g., `section-divider.tsx`)
- Test files: match component name with `.test.tsx` suffix
- Use functional components with TypeScript
- Tailwind CSS for styling
- ESLint config: `.eslintrc.mjs`
- Prettier config: `.prettierrc`
- Always run `npm run format` before committing

## Testing instructions

- Framework: Jest + React Testing Library
- Config: `jest.config.mjs`, `jest.setup.js`
- Test location: `tests/components/`
- Naming: `<component-name>.test.tsx`
- Use semantic queries: `getByRole`, `getByText`, `getByLabelText`
- Test ARIA attributes and accessibility
- All tests must pass before committing
- Add tests for new features and bug fixes

## Build process

- Next.js static export to `out/` directory
- Config: `next.config.ts`
- Build command: `npm run build`
- Deployment target: GitHub Pages

## CI/CD

- Platform: GitHub Actions
- Test workflow: `.github/workflows/test.yml` (runs on push and PR)
- Deploy workflow: `.github/workflows/deploy.yml` (runs on push to main)
- All tests must pass in CI before merge

## Dependencies

- Package manager: npm
- Lock file: `package-lock.json` (always commit with `package.json`)
- Add dependency: `npm install <package-name>`
- Remove dependency: `npm uninstall <package-name>`
