# Zencrypt - Cybersecurity Website

A modern, fully responsive cybersecurity website built with React, featuring stunning animations and a professional design inspired by top cybersecurity companies.

## Features

- **Modern Design**: Sleek, professional design with cybersecurity theme
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Rich Animations**: Smooth animations throughout using Framer Motion
- **Interactive Particles**: Animated particle background for visual appeal
- **Multiple Sections**:
  - Hero section with animated shield
  - Real-time statistics with counter animations
  - Services showcase with 6 core offerings
  - Industry-specific solutions
  - About section with company values
  - Client testimonials carousel
  - Contact form with validation
  - Comprehensive footer

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Framer Motion** - Animation library
- **React Router DOM** - Navigation
- **React Icons** - Icon library
- **React CountUp** - Animated counters
- **React Intersection Observer** - Scroll animations

## Project Structure

```
zencrypt/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & .css
│   │   ├── Hero.jsx & .css
│   │   ├── ParticlesBackground.jsx & .css
│   │   ├── Statistics.jsx & .css
│   │   ├── Services.jsx & .css
│   │   ├── Solutions.jsx & .css
│   │   ├── About.jsx & .css
│   │   ├── Testimonials.jsx & .css
│   │   ├── Contact.jsx & .css
│   │   └── Footer.jsx & .css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── DESIGN_REFERENCE.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd zencrypt
```

2. Install dependencies (already installed):
```bash
npm install
```

3. Start the development server (already running):
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Design System

### Color Palette

- **Primary Dark**: `#0A1628` - Main background
- **Primary Blue**: `#00D9FF` - Brand accent
- **Accent Purple**: `#8B5CF6` - Secondary accent
- **Accent Green**: `#00FF88` - Success/Security indicators
- **Dark Gray**: `#1F2937` - Secondary background
- **Light Gray**: `#F3F4F6` - Light elements

### Typography

- **Font Family**: Inter (system fonts as fallback)
- **Headings**: Bold weights (700-800)
- **Body Text**: Regular (400-500)

### Animations

All animations use Framer Motion for:
- Fade in/out effects
- Slide transitions
- Hover states
- Scroll-triggered animations
- Particle systems
- Counter animations

## Key Components

### 1. Navbar
- Sticky navigation with scroll effect
- Smooth scroll to sections
- Mobile responsive menu
- Animated logo and links

### 2. Hero Section
- Full-height landing area
- Animated 3D shield visualization
- Floating security icons
- CTA buttons with hover effects
- Quick stats display

### 3. Statistics
- Animated counters on scroll
- Visual metrics (threats blocked, clients, uptime)
- Glass morphism cards

### 4. Services
- 6 core security services
- Interactive service cards
- Hover animations
- Feature lists

### 5. Solutions
- Industry-specific solutions
- Healthcare, Finance, E-commerce, Enterprise
- Animated particles
- Rotating icons

### 6. About
- Company information
- Core values showcase
- Team statistics
- Sticky content on scroll

### 7. Testimonials
- Client testimonial carousel
- Star ratings
- Navigation controls
- Smooth transitions

### 8. Contact
- Contact form with validation
- Contact information cards
- Service selection dropdown
- Submit with loading state

### 9. Footer
- Multiple link sections
- Social media links
- Compliance badges
- Scroll to top button

## Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-dark: #0A1628;
  --primary-blue: #00D9FF;
  --accent-purple: #8B5CF6;
  --accent-green: #00FF88;
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Navbar.jsx`

### Modifying Animations

All animations use Framer Motion. Adjust timing, delays, and effects in individual component files.

## Performance Optimizations

- Lazy loading for images
- Intersection Observer for scroll animations
- Optimized particle count based on screen size
- CSS animations for simple effects
- Component-level code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Resources

- [Design Reference](./DESIGN_REFERENCE.md) - Comprehensive design documentation
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## License

This project is for demonstration purposes. Customize and use as needed for your cybersecurity business.

## Credits

Design inspired by leading cybersecurity companies:
- CrowdStrike
- Palo Alto Networks
- Fortinet

Built with modern web technologies and best practices for performance, accessibility, and user experience.

---

**Zencrypt** - Protecting Your Digital Future
