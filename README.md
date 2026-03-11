# TBMI Studios - React App

A modern React application for TBMI Studios video editing courses website, built with Vite and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── Stats.jsx          # Statistics section with reusable StatCard
│   ├── About.jsx          # About section with reusable FeatureCard
│   ├── Courses.jsx        # Courses section with reusable CourseCard
│   ├── HowItWorks.jsx     # Process section with reusable StepCard
│   ├── Testimonials.jsx   # Testimonials section with reusable TestimonialCard
│   ├── CTA.jsx            # Call-to-action section
│   └── Footer.jsx         # Footer component
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Features

- **Reusable Components**: All repetitive sections use component-based architecture
  - `StatCard` - for displaying statistics
  - `FeatureCard` - for feature cards in the About section
  - `CourseCard` - for course offerings
  - `StepCard` - for process steps
  - `TestimonialCard` - for user testimonials

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark mode styling
- **Fast Build**: Uses Vite for rapid development and optimized builds

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Tailwind Configuration

Custom colors and theme extensions are defined in `tailwind.config.js`:

- Primary color: `#bf3a2b` (red)
- Accent color: `#f59e0b` (amber)
- Background dark: `#0a0a0a`
- Surface: `#1a1a1a`

## Notes

- All images are fetched from external URLs
- Material Symbols icons are used throughout the design
- The component structure allows for easy maintenance and component reuse
