# TBMI Studios - Creative Studio Platform

A modern, fully-responsive React application for TBMI Studios - a comprehensive creative studio offering professional training, production services, and studio solutions. Built with Vite, Tailwind CSS, and Framer Motion.

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Landing page with all home sections
│   ├── Services.jsx      # Comprehensive services page (10 services)
│   ├── About.jsx         # Company mission, values, team, story
│   ├── Gallery.jsx       # Portfolio gallery with filterable projects
│   ├── Enroll.jsx        # Single-step enrollment form page
│   └── Contact.jsx       # Contact info & quote request form
├── components/
│   ├── Navbar.jsx        # Responsive navigation with hamburger menu
│   ├── Footer.jsx        # Footer with social links
│   ├── Hero.jsx          # Hero section with animated headline
│   ├── Stats.jsx         # Statistics section
│   ├── About.jsx         # About/Features section
│   ├── Services.jsx      # Services grid with filtering
│   ├── HowItWorks.jsx    # Process/workflow section
│   ├── Testimonials.jsx  # Client testimonials
│   ├── CTA.jsx           # Call-to-action banner
│   ├── EnrollForm.jsx    # Single-step enrollment form with file upload
│   ├── FormProgress.jsx  # Form progress indicator
│   ├── EnrollHero.jsx    # Enrollment page hero
│   ├── WhatsNext.jsx     # Post-enrollment section
│   └── HelpStrip.jsx     # Help/support section
├── services/
│   └── firebaseService.js # Firebase Firestore integration
├── config/
│   └── firebase.js        # Firebase configuration
├── styles/
│   └── index.css          # Global styles
├── App.jsx               # Main app with routing
└── main.jsx              # Entry point
```

## Pages & Features

### Home Page (`/`)
- Hero section with animated text and services marquee
- Statistics showcasing impact (2000+ creators, 500+ projects, etc.)
- Feature highlights of complete creative suite
- 10 services overview with filtering (Training, Production, Services)
- How It Works section with 3-step workflow
- Client testimonials
- Call-to-action button

### Services Page (`/services`)
- Detailed cards for all 10 services with features
- Service categories (Training, Production, Services)
- Company process workflow (Consultation → Planning → Execution → Delivery)
- Custom buttons: "Enroll Now" for training, "Hire Us" for other services

### About Page (`/about`)
- Company mission statement
- Company history and evolution
- Core values (Quality Delivery, Creative Partnership, Accessibility, Innovation)
- Team member profiles
- Call-to-action

### Gallery Page (`/gallery`)
- Filterable portfolio gallery
- 6 filter categories: All Works, Video Editing, Photography, Film Making, Podcast, Studio Setup
- Project cards with titles and categories
- Hover effects with project details

### Enrollment Page (`/enroll`)
- **Single-step form** with all fields on one page:
  - Training program selection (Video Editing, Photography)
  - Personal info (Full Name, Email)
  - Phone number (+234 prefix)
  - WhatsApp number (+234 prefix)
  - Age range selector
  - Gender toggle (Male/Female)
  - How you heard about us
  - **Payment receipt upload** with image preview
- Form validation required fields
- Success confirmation screen
- Smooth animations with Framer Motion

### Contact Page (`/contact`)
- **Contact Information Section**:
  - Email: tbmi.studios@gmail.com
  - Phone: +234 800 000 0000
  - WhatsApp: +234 901 543 3132 (clickable WhatsApp link)
  - Location: Osogbo, Osun state, Nigeria
  - Social media links (Instagram, YouTube, TikTok)

- **Quote Request Form**:
  - Full Name, Email, Phone
  - Service selection (8 non-training services)
  - Project details textarea
  - Form submission confirmation

## Key Features

### Responsive Design
- **Desktop Navigation**: Full menu bar with logo and Get Started button
- **Mobile Navigation**: Hamburger menu with smooth animations
- Fully responsive across all screen sizes (mobile, tablet, desktop)

### Animations & Interactions
- **Framer Motion**: Smooth entrance animations, hover effects, scroll triggers
- Staggered animations for list items
- Hero section text animations
- Button hover and tap effects
- Progress indicator animations

### Icons
- **react-icons/fa**: FontAwesome icons for social media and UI elements
- **lucide-react**: Clean, minimal icons (for some legacy components)
- Consistent icon sizing and styling

### Form Handling
- Single-step enrollment form
- Image upload with preview capability
- File type validation (Images only)
- Remove button to change uploaded image
- Form data state management with React hooks

### Routing
- **React Router v6**: Client-side routing with 6 main routes:
  - `/` - Home
  - `/services` - Services
  - `/about` - About
  - `/gallery` - Gallery
  - `/enroll` - Enrollment
  - `/contact` - Contact & Quote

## 10 Services Offered

1. **Video Editing Training** - Professional video editing courses
2. **Photography Training** - Photography fundamentals and techniques
3. **Film Making** - Complete filmmaking from concept to distribution
4. **Professional Photo Shoot** - Studio/on-location photography
5. **Content Creation** - Strategic social media content
6. **Podcast Production** - Full-service podcast production
7. **Karaoke Services** - Professional karaoke event setup
8. **Social Media Management** - Complete social media strategy
9. **Studio Setup Consultation** - Studio design and equipment planning
10. **Media Coverage** - Professional event videography

## Technologies Used

- **React 18.2.0** - UI framework with Hooks
- **React Router v6.20.0** - Client-side routing
- **Vite 4.5.14** - Fast build tool with HMR
- **Tailwind CSS 3.3.0** - Utility-first styling
- **Framer Motion 12.35.0** - Animation library
- **react-icons 4.x** - Icon library
- **Firebase** - Backend for form submissions (ready for integration)
- **PNPM** - Package manager

## Installation

```bash
# Install dependencies
pnpm install

# Install Firebase
pnpm add firebase

# Install react-icons (if not already installed)
pnpm add react-icons
```

## Development

Run the development server:

```bash
pnpm dev
```

The app will open at `http://localhost:3000`

## Production Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Firebase Setup

To enable form submissions to Firestore:

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)
2. Set up Firestore database
3. Get Firebase config credentials
4. Create `src/config/firebase.js` with configuration
5. Create `src/services/firebaseService.js` with form handlers
6. Update form submission handlers to use Firebase

See `firebase setup guide` in the documentation for detailed steps.

## Customization

### Colors & Theme
Modify `tailwind.config.js` for custom colors:
- Primary: `#bf3a2b` (red)
- Accent: `#f59e0b` (amber)
- Background: `#0a0a0a`
- Surface: `#1a1a1a`

### Fonts
- Display: Space Grotesk, Bebas Neue
- Body: DM Sans
- Configured in `index.css`

### Brand Assets
- Logo: `/public/tbmi-removebg-preview.png`
- Update with your actual logo

## Performance

- **Code Splitting**: Routes are automatically code-split by React Router
- **Image Optimization**: External images with lazy loading
- **CSS Optimization**: Tailwind PurgeCSS removes unused styles
- **Animation Optimization**: Framer Motion uses GPU acceleration

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Deployment

Ready to deploy to:
- Vercel (recommended for Vite apps)
- Netlify
- GitHub Pages
- Any static host

Deploy command:
```bash
pnpm build
# Upload dist/ folder to your host
```

## Future Enhancements

- [ ] Email notifications on form submission
- [ ] Admin dashboard for submission review
- [ ] Payment integration for services
- [ ] Blog/Resources section
- [ ] Video testimonials
- [ ] Advanced analytics
- [ ] User authentication (optional)

## Support

For issues or questions, contact: tbmi.studios@gmail.com

---

**TBMI Studios** - Transform Your Creative Vision Into Reality
