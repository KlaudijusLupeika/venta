# Venta City Apartments — Next.js site

A real Next.js (App Router + TypeScript + Tailwind CSS + Framer Motion) rebuild of the
Venta City Apartments site, mirroring the elevated design of the published preview:
warm color grading, scroll-reveal motion, a filterable masonry room gallery with
lightbox, animated stats, a marquee ticker, and full English/Lithuanian bilingual
support.

## Getting started

You'll need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads
as you edit files.

## Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata, language provider
  page.tsx           Assembles every section in order
  globals.css         Tailwind entry + a few global effects (grain texture, photo tint)
components/           One file per section/UI piece (Nav, Hero, RoomsGallery, ...)
lib/
  content.ts           ALL bilingual copy and structured data (edit text here)
  LanguageContext.tsx  EN/LT language state, shared via React context
public/images/         Photos used across the site
```

## Editing content

Almost everything you'd want to change — headings, body copy, the amenities list,
room captions, stats, contact details — lives in **`lib/content.ts`**. Every string is
written as `{ en: "...", lt: "..." }` so the English and Lithuanian text always stay
next to each other. You don't need to touch any component file to change text.

A few things to update before you launch:

- **`business.email`** and **`business.phone`** in `lib/content.ts` are placeholders —
  swap in your real contact details.
- **`business.addressQuery`**, **`business.mapsSearchUrl`** and
  **`business.mapsDirectionsUrl`** point at Stoties g. 36, Venta — update these if the
  address ever changes (the Get Directions / Open in Google Maps links use them).
- Booking.com is listed as a contact method with no link in `components/Contact.tsx` —
  add your `href` there once you have a stable listing URL.

## Adding or changing photos

Photos live in `public/images/` and are referenced by path in `lib/content.ts`
(`roomCards`) and directly inside `components/Hero.tsx` and
`components/HouseSection.tsx`. Add a new image to `public/images/`, then reference it
as `/images/your-file.jpg`. Next.js's `<Image>` component automatically serves
optimised, responsively-sized versions in modern formats (AVIF/WebP) — you don't need
to pre-resize or compress photos yourself.

## Design system

Colors, the two typefaces (Fraunces for display type, Inter for UI text), and spacing
tokens are defined in `tailwind.config.ts`. The palette matches the published preview:

- `ink` — near-black text
- `stone` / `pebble` — muted secondary text and dividers
- `accent` / `accent-deep` — the warm terracotta accent
- `linen` / `paper` — the two background tones
- `footer-ink` / `footer-paper` — the dark sections (location, footer, pull-quote)

## Deploying to Vercel

The fastest path, using the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project, accept the defaults — Vercel
auto-detects Next.js). Running `vercel --prod` promotes the deployment to your
production URL. You can also connect this project's Git repository directly at
[vercel.com/new](https://vercel.com/new) for automatic deploys on every push.

The contact form sends submissions to `lupeika.k@gmail.com` through SMTP. Copy
`.env.example` to `.env.local`, fill in the SMTP credentials, and configure the same
variables in your hosting provider. Never commit `.env.local`.

## Notes on parity with the published preview

This project mirrors the section order, copy, color palette, typography, and the
main motion/interaction system (scroll reveals, animated stats, marquee, filterable
masonry gallery with lightbox, magnetic buttons, tilted gallery cards, scroll progress
bar, active-section nav highlighting) of the previously published single-page
preview. A few things were rebuilt in a more idiomatic "real app" way rather than
copied line-for-line:

- Language switching re-renders text via React state instead of toggling CSS
  visibility — slightly more efficient and easier to extend to a third language later.
- Images are served through `next/image` from `public/images/` (real files, responsively
  optimised) instead of being inlined as base64 data URIs.
- The masonry gallery uses Tailwind's CSS-columns utilities (`columns-*`,
  `break-inside-avoid`) — same technique as the preview, same "no leftover white space"
  result.

The contact form is wired to the SMTP endpoint described above. A real booking
calendar or analytics can be added separately if needed.
