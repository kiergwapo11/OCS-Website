# OCS Website

Professional website for OCS — virtual assistant services. Built with React, Vite, Tailwind CSS, and React Three Fiber for a conversion-focused, accessible experience.

## Features

- **Core value & audience**: Messaging for VA candidates, clients hiring VAs, and partners
- **Navigation**: Home, About, Services, Apply, Resources, Contact
- **3D hero**: Floating brand-colored 3D shapes (React Three Fiber + Drei)
- **Conversion paths**: Apply as VA, Book a discovery call, forms with success states
- **Page templates**: Homepage (hero, benefits, how it works, testimonials, KPIs, CTA), About, Services, Apply (+ form), Resources, Contact (+ form)
- **Design**: Brand palette from logo (rose/coral/deep), Syne + DM Sans, mobile-first, focus-visible for accessibility

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

- **Build**: `npm run build`
- **Preview build**: `npm run preview`

## Logo

The site expects `logo-workroom.jpg` in the `public/` folder (it’s copied there from the project root when you run the copy step). Header and footer use this logo.

## Post-launch

- Connect Apply and Contact forms to your backend or form service (e.g. Formspree, Netlify Forms, or your API)
- Add analytics (e.g. bounce rates, click-throughs, form submissions) and iterate on copy and CTAs
