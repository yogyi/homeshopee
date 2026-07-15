# The Home Shopee

Premium home-décor storefront inspired by [Mason Home](https://masonhome.in/) and [The Decor Kart](https://thedecorkart.com/), built for **The Home Shopee** ([Instagram](https://www.instagram.com/the_home_shopee)).

## What’s included

- Mega-menu navigation from client notes (Paintings, Dinnerware + submenus, Home Decor, Planters & Plants, Bar Trolleys; **Rooms removed**)
- Cart drawer (Mason Home–style) with localStorage persistence
- Product catalog from the client Google Sheet (18 SKUs) + Drive images
- Collection pages, product detail pages, about / contact / shipping

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data notes

- Product copy & Drive image IDs live in `data/products.json`
- Images are under `public/products/`
- MRP / selling price columns in the sheet were empty — placeholder pricing is used until the client fills them
- Dinnerware, paintings, clocks, showpieces, and bar trolleys are wired in the nav; listing pages show an empty state until more SKUs are added

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4
