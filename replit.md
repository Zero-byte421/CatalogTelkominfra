# AppCatalog - Modern Interactive Application Catalog

## Overview

AppCatalog is a modern, interactive web application that serves as a centralized catalog for internal enterprise applications. Built with React and TypeScript, it provides a clean, responsive interface for browsing and accessing various internal tools and services. The application features smooth animations, dark mode support, SSO login capabilities, and a comprehensive application directory with search functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with custom design tokens

**Component Structure**
- **shadcn/ui** component library based on Radix UI primitives
- Component architecture follows the "New York" style variant from shadcn
- Custom components built on top of Radix UI for accessibility (WCAG AA compliant)
- Design system uses CSS variables for theming with light/dark mode support

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and caching
- No global client state management library - relies on React Query and local component state
- Custom query client configuration with infinite stale time and disabled auto-refetch

**Animation System**
- **Framer Motion** for page transitions, scroll animations, and interactive effects
- Implements `AnimatedPage` wrapper for consistent page transitions
- `ScrollReveal` component for scroll-triggered animations with viewport detection
- Respects user's reduced motion preferences via `useReducedMotion` hook

**Styling Approach**
- Hybrid design combining Material Design principles with modern SaaS aesthetics
- Custom color system with HSL-based tokens supporting opacity modifiers
- Elevation system using subtle background overlays (hover-elevate, active-elevate-2)
- Responsive typography scale from mobile to desktop
- Grid layouts: 1-4 columns depending on viewport size

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Custom middleware for request logging with response time tracking
- JSON body parsing with raw body preservation for webhook verification
- CORS and credential support configured

**Module System**
- ES Modules (ESM) throughout the entire stack
- No CommonJS - consistent use of `import/export` syntax

**Build Process**
- **esbuild** for production server bundling
- Vite handles client-side bundling
- Separate build outputs: `dist/` for server, `dist/public/` for client

**Development Environment**
- Custom Vite development middleware integrated with Express
- HMR (Hot Module Replacement) working through the Express server
- SSR template rendering in development mode

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema-first approach with TypeScript types generated from Drizzle schemas
- Migrations stored in `./migrations` directory
- Uses `drizzle-zod` for runtime schema validation

**Current Storage Implementation**
- In-memory storage (`MemStorage` class) for development/testing
- Interface-based storage design (`IStorage`) allowing easy swap to database implementation
- User management with UUID-based IDs and unique username constraints

**Data Models**
- **Users**: ID, username, password (for potential authentication)
- **Applications**: Hardcoded catalog data in `client/src/data/applications.ts`
- **Features**: Static feature list for marketing content

### Authentication & Authorization

**Planned SSO Integration**
- Login page designed for Single Sign-On implementation
- No current authentication middleware - prepared for future integration
- Session management setup via `connect-pg-simple` for PostgreSQL-backed sessions

**Security Considerations**
- Environment variable validation for DATABASE_URL
- Prepared for secure credential handling
- CSRF protection considerations in place with raw body access

### Routing Architecture

**Client-Side Routing**
- **Wouter** for declarative routing with hooks-based navigation
- Route definitions in `App.tsx` with AnimatePresence for transitions
- Routes:
  - `/` - Home page with hero section
  - `/applications` - Application catalog with search
  - `/applications/:id` - Individual application detail pages
  - `/login` - SSO login page
  - 404 handling for unmatched routes

**Server-Side Routing**
- API routes prefixed with `/api` (placeholder structure in place)
- Static file serving for production builds
- Development mode uses Vite middleware for asset serving

### Performance Optimizations

**Code Splitting**
- Vite automatic code splitting for routes and components
- Lazy loading ready for large component trees

**Asset Optimization**
- Image assets stored in `attached_assets/generated_images/`
- Preconnect hints for Google Fonts in HTML head
- CSS variables for runtime theme switching without reload

**Caching Strategy**
- React Query with infinite stale time prevents unnecessary refetches
- Static assets served with appropriate cache headers in production

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled components built on Radix UI following the New York variant
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component (currently imported but not actively used)

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant handling for component styles
- **clsx** + **tailwind-merge**: Conditional className composition
- **Framer Motion**: Production-ready animation library
- **Embla Carousel**: Touch-friendly carousel component

### Data Management
- **@tanstack/react-query**: Async state management and caching
- **Drizzle ORM**: TypeScript-first ORM with `drizzle-orm` and `drizzle-zod`
- **@neondatabase/serverless**: PostgreSQL client for Neon serverless database
- **Zod**: Schema validation library

### Form Handling
- **React Hook Form**: Form state management (via @hookform/resolvers)
- **Zod resolvers**: Integration between React Hook Form and Zod schemas

### Development Tools
- **Vite plugins**: 
  - `@vitejs/plugin-react` for React Fast Refresh
  - `@replit/vite-plugin-runtime-error-modal` for error overlays
  - `@replit/vite-plugin-cartographer` for code mapping (dev only)
  - `@replit/vite-plugin-dev-banner` for development indicators
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production

### Fonts & Typography
- **Google Fonts**: Inter and DM Sans font families loaded via CDN
- System font fallbacks for performance

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (prepared for use)
- **express-session**: Implied dependency for session handling

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for logging and tracking