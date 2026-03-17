# Portfolio
A personal portfolio showcasing my skills, projects, and experience as a Software Engineer, built with clean architecture and modern development practices.

## Overview

- Initial Project

```bash
npx create-next-app@latest my-portfolio
```

- Run Project

```bash
npm run start
npm run dev
```

## Features

### Theme

1. Config css for dark theme in `my-portfolio/app/global.css`
2. Implement `ThemeProvider` in `my-portfolio/components/theme-provider.tsx`
3. Update `my-portfolio/app/layout.tsx` to be wrapped by `ThemeProvider`
4. Implement `ThemeToggle` in `my-portfolio/components/theme-toggle.tsx`