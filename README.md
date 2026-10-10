# The Scribbled Spoon

A dark, modern, single-page restaurant website. It covers the whole menu, from starters and mains to spices, sweets and drinks, and includes a table reservation form. Built with plain HTML and CSS only: no JavaScript, no frameworks, no build step.

**Live site:** https://YOUR-USERNAME.github.io/scribbled-spoon/

## Features

- **Hero** with a headline, call-to-action buttons, category chips and a round dish photo
- **Tabbed menu** with five categories (Starters, Mains, Spices, Sweets, Drinks), switched with pure CSS
- **Dish cards** with photo, description, heat or serving tag, price and an "Add to Cart" button
- **Featured dishes** section
- **Reservation section** with opening hours and a booking form
- **Footer** with quick links, contact details and a newsletter field
- **Responsive layout** for phones, tablets and desktops, with a collapsible mobile menu
- **Smooth animations**: staggered hero entrance, menu cards rising on tab change, and sections fading in on scroll
- **Respects reduced motion**: animations switch off for people who ask their device to reduce motion

## Built with

- HTML5
- CSS3 (custom properties, Grid, Flexbox, scroll-driven animations)
- [Philosopher](https://fonts.google.com/specimen/Philosopher) for headings and [Karla](https://fonts.google.com/specimen/Karla) for body text, loaded from Google Fonts

## Project structure

```
scribbled-spoon/
├── index.html
├── styles.css
├── README.md
└── images/
    ├── hero.jpg
    ├── dish1.jpg, dish2.jpg, dish3.jpg
    └── ...one photo per menu item (see "Images" below)
```

## Getting started

No installation is needed.

1. Download or clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/scribbled-spoon.git
   cd scribbled-spoon
   ```
2. Open `index.html` in your browser.

For automatic reloading while you edit, open the folder in VS Code and use the **Live Server** extension.

## Customizing

### Colors and fonts

All colors and fonts are CSS variables at the top of `styles.css`. Change a value there and it updates across the whole site.

| Variable | Value | Used for |
| --- | --- | --- |
| `--bg` | `#17120F` | Page background |
| `--surface` | `#231B17` | Cards, footer and form panels |
| `--surface-2` | `#2B211C` | Hover and focus states, image placeholders |
| `--line` | `#3A2E27` | Borders and dividers |
| `--text` | `#F2E8DA` | Main text |
| `--muted` | `#BFB3A3` | Secondary text |
| `--saffron` | `#F2A93B` | Buttons, prices, highlights |
| `--chili` | `#E5484D` | Starters and Mains accent, hot tags |
| `--rose` | `#E58BA5` | Sweets accent |
| `--mint` | `#6DBE8C` | Drinks accent, veg tags |

### Menu items

Each dish is an `<article class="menu-card">` inside its category panel in `index.html`. Edit the name, description, tag and price in place, or copy an existing card to add a new dish.

### Contact details and hours

Update the phone number, email, address, opening hours and social links in the reservation section and the footer of `index.html`.

## Images

Put all images in the `images/` folder. Use lowercase file names with no spaces, because GitHub Pages is case-sensitive and `Dish2.jpg` is not the same file as `dish2.jpg`.

| Image | Recommended shape |
| --- | --- |
| `hero.jpg` | Square, with the dish centred on a dark plate (cropped to a circle) |
| `dish1.jpg`, `dish2.jpg`, `dish3.jpg` | 4:3 |
| Menu card photos | 4:3, about 800 × 600 px, saved as JPG or WebP |

Menu card photos:

- **Starters:** `samosa.jpg`, `dahi-bhalla.jpg`, `chicken-tikka.jpg`, `fish-pakora.jpg`
- **Mains:** `chicken-karahi.jpg`, `seekh-kebab-roll.jpg`, `beef-nihari.jpg`, `garden-pulao.jpg`
- **Spices:** `karahi-masala.jpg`, `garam-masala.jpg`, `kashmiri-chili.jpg`, `saffron.jpg`
- **Sweets:** `mango-kulfi.jpg`, `gulab-jamun.jpg`, `kheer.jpg`, `shahi-tukray.jpg`
- **Drinks:** `cardamom-chai.jpg`, `mango-lassi.jpg`, `mint-lemonade.jpg`, `rose-sharbat.jpg`

To adjust how tightly the hero photo is cropped, change `--zoom`, `--fx` and `--fy` on `.hero-image` in `styles.css`.

## Deployment

The site is hosted with GitHub Pages.

1. Push the project to a GitHub repository with `index.html` in the root.
2. Open **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

To update the live site later:

```bash
git add .
git commit -m "Describe your change"
git push
```

## Known limitations

- **The reservation form does not send data yet.** Static HTML needs a form service or a backend. The simplest option is [Formspree](https://formspree.io): create a form there and replace `action="#"` in the `<form class="reserve-form">` tag with your Formspree URL.
- **The cart, search and newsletter fields are visual only.** They have no logic behind them.
- **The mobile menu stays open after you tap a link.** Closing it automatically needs a small amount of JavaScript.
- **The scroll-reveal animation** works in Chrome, Edge, Samsung Internet and newer versions of Safari. Other browsers show the sections normally without the effect.

## Author

Syed Danial Ahmed
