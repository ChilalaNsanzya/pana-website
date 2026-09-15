# PANA Website

A modern, elegant website for Pana - Where Friends Meet.

## Features

- **Home Page**: Hero section with welcome message and important venue information
- **About Us**: Story of Pana and brand identity
- **Menus**: Food and drinks menu sections
- **Reservations**: Multiple booking options (WhatsApp, Dineplan, Phone, Email)
- **Disclaimer**: Venue policies and guidelines
- **Contact**: Contact information with embedded Google Maps

## Tech Stack

- React 18
- Vite
- React Router DOM
- TailwindCSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pana-website/
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menus.jsx
│   │   ├── Reservations.jsx
│   │   ├── Disclaimer.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Adding Menu Content

The menu pages (`src/pages/Menus.jsx`) currently have placeholder content. To add your actual menu:

1. Extract menu items from the PDF
2. Create menu data structures in the component
3. Map through the data to display items with prices

### Updating Social Media Links

Update the social media URLs in:
- `src/components/Layout.jsx` (footer)
- `src/pages/Contact.jsx`

### Google Maps

Update the Google Maps embed URL in `src/pages/Contact.jsx` with the correct coordinates for Cedar Square Shopping Center.

### Dineplan Integration

Add your Dineplan reservation link in `src/pages/Reservations.jsx` where it says `href="#"`.

## Contact Information

- **Phone**: +27 (0) 11 465 0101
- **WhatsApp**: +27 (0) 76 871 1227
- **Email**: info@panafourways.co.za
- **Address**: Cedar Square Shopping Center, Cedar Road, Fourways, JHB

## License

© 2024 Pana. All rights reserved.
