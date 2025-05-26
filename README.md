# Personal Marketing Site

A modern, responsive personal marketing website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, animated UI with glassmorphism effects
- 📱 Fully responsive design
- 🎨 Custom color scheme (White, Green, Black)
- 🔗 Social media integration
- 📧 Contact information display
- 🚀 Optimized for hosting and deployment

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

1. Update `app/page.tsx`:
   - Replace social media URLs in the `socialLinks` array
   - Update contact information in the `contactInfo` array
   - Replace "Your Name" with your actual name
   - Add your profile picture to the public folder and update the image source

2. Update `app/layout.tsx`:
   - Customize the metadata (title, description, etc.)

## Deployment

This app is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Run `npm run build` to generate the static files in the `out` directory.