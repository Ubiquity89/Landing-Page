# JG Global University Landing Page

A modern, premium university landing page built with Next.js 15, Tailwind CSS, and Framer Motion animations.

## Features

- **Modern Transparent Navbar** - Sticky header with glassmorphism effect and mobile-responsive hamburger menu
- **Hero Section** - Full-screen hero with campus background image, gradient overlay, and animated stats
- **About Section** - Two-column layout with feature cards and university highlights
- **Programs Section** - Six program cards with colorful gradient icons and hover effects
- **Stats Section** - Animated number counters with graduation image background
- **Testimonials** - Carousel with navigation, star ratings, and alumni company logos
- **CTA Section** - Contact information with inquiry form
- **Footer** - Multi-column layout with social links and navigation

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ubiquity89/Landing-Page.git

# Navigate to the project directory
cd Landing-Page

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── navbar.tsx        # Navigation bar component
│   ├── hero-section.tsx  # Hero section with background
│   ├── about-section.tsx # About the university
│   ├── programs-section.tsx # Academic programs
│   ├── stats-section.tsx # Statistics with counters
│   ├── testimonials-section.tsx # Student testimonials
│   ├── cta-section.tsx   # Call to action with form
│   └── footer.tsx        # Site footer
├── public/
│   └── images/           # Campus and university images
└── components/ui/        # shadcn/ui components
```

## Customization

### Colors

The color theme can be customized in `app/globals.css`. The current theme uses a red academic color palette:

```css
--primary: oklch(0.50 0.22 25);      /* Primary red */
--accent: oklch(0.55 0.20 25);       /* Accent red */
--navy: oklch(0.20 0.05 15);         /* Dark background */
```

### Content

Update the content in each component file to match your university's information:

- University name and branding in `navbar.tsx`
- Hero headline and stats in `hero-section.tsx`
- Programs and courses in `programs-section.tsx`
- Testimonials in `testimonials-section.tsx`



```bash
pnpm build
pnpm start
```

## License

MIT License - feel free to use this template for your own projects.

---

Built with Next.js and Tailwind CSS
