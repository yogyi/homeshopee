import type { NavItem } from "./types";

/**
 * Full luxury home-décor IA (Decor Kart circle collections + client WhatsApp notes).
 * Wall Art → Paintings. Rooms removed. Planters is one collection among many.
 */
export const navigation: NavItem[] = [
  {
    label: "New Arrivals",
    href: "/collections/new-arrivals",
    slug: "new-arrivals",
  },
  {
    label: "Decor",
    href: "/collections/home-decor",
    slug: "home-decor",
    children: [
      { label: "All Decor", href: "/collections/home-decor", slug: "home-decor" },
      { label: "Showpieces", href: "/collections/showpieces", slug: "showpieces" },
      { label: "Clocks", href: "/collections/clocks", slug: "clocks" },
      {
        label: "Planters & Plants",
        href: "/collections/planters-plants",
        slug: "planters-plants",
      },
    ],
  },
  {
    label: "Lighting",
    href: "/collections/lighting",
    slug: "lighting",
    children: [
      { label: "All Lighting", href: "/collections/lighting", slug: "lighting" },
      { label: "Table Lamps", href: "/collections/table-lamps", slug: "table-lamps" },
      { label: "Floor Lamps", href: "/collections/floor-lamps", slug: "floor-lamps" },
    ],
  },
  {
    label: "Dinnerware",
    href: "/collections/dinnerware",
    slug: "dinnerware",
    children: [
      { label: "All Dinnerware", href: "/collections/dinnerware", slug: "dinnerware" },
      { label: "Tea Sets", href: "/collections/tea-sets", slug: "tea-sets" },
      { label: "Mugs", href: "/collections/mugs", slug: "mugs" },
      { label: "Glassware", href: "/collections/glassware", slug: "glassware" },
      {
        label: "German Silver Ware",
        href: "/collections/german-silver-ware",
        slug: "german-silver-ware",
      },
    ],
  },
  {
    label: "Paintings",
    href: "/collections/paintings",
    slug: "paintings",
  },
  {
    label: "Furniture",
    href: "/collections/furniture",
    slug: "furniture",
    children: [
      { label: "All Furniture", href: "/collections/furniture", slug: "furniture" },
      { label: "Bar Trolleys", href: "/collections/bar-trolleys", slug: "bar-trolleys" },
      { label: "Consoles", href: "/collections/consoles", slug: "consoles" },
    ],
  },
  {
    label: "Sale",
    href: "/collections/sale",
    slug: "sale",
  },
];

export const collectionMeta: Record<
  string,
  {
    title: string;
    description: string;
    category?: string;
    subcategory?: string;
    filter?: "new" | "sale";
  }
> = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest luxury finds for layered, luminous rooms.",
    filter: "new",
  },
  "home-decor": {
    title: "Decor",
    description: "Showpieces, clocks, and accents that make a house feel collected.",
    category: "home-decor",
  },
  clocks: {
    title: "Clocks",
    description: "Statement timepieces for mantel, console, and gallery walls.",
    category: "home-decor",
    subcategory: "clocks",
  },
  showpieces: {
    title: "Showpieces",
    description: "Sculptural tabletop décor with presence and polish.",
    category: "home-decor",
    subcategory: "showpieces",
  },
  "planters-plants": {
    title: "Planters & Plants",
    description: "Handwoven vessels and life-like botanicals for serene corners.",
    category: "planters-plants",
  },
  planters: {
    title: "Planters",
    description: "Woven and concrete vessels for indoor gardens.",
    category: "planters-plants",
    subcategory: "planters",
  },
  plants: {
    title: "Plants",
    description: "Faux palms and sculptural greens—full presence, zero upkeep.",
    category: "planters-plants",
    subcategory: "plants",
  },
  lighting: {
    title: "Lighting",
    description: "Table lamps and floor lamps that set the mood of every room.",
    category: "lighting",
  },
  "table-lamps": {
    title: "Table Lamps",
    description: "Glow for bedside, console, and reading corners.",
    category: "lighting",
    subcategory: "table-lamps",
  },
  "floor-lamps": {
    title: "Floor Lamps",
    description: "Tall, architectural light for evenings at home.",
    category: "lighting",
    subcategory: "floor-lamps",
  },
  dinnerware: {
    title: "Dinnerware",
    description: "Tea sets, glassware, and German silver for gathered tables.",
    category: "dinnerware",
  },
  "tea-sets": {
    title: "Tea Sets",
    description: "Serve rituals with quiet opulence.",
    category: "dinnerware",
    subcategory: "tea-sets",
  },
  mugs: {
    title: "Mugs & Bowls",
    description: "Everyday pieces with floral character.",
    category: "dinnerware",
    subcategory: "mugs",
  },
  glassware: {
    title: "Glassware",
    description: "Art glass and vessels that catch the light.",
    category: "dinnerware",
    subcategory: "glassware",
  },
  "german-silver-ware": {
    title: "German Silver Ware",
    description: "Luminous serving pieces for festive dining.",
    category: "dinnerware",
    subcategory: "german-silver-ware",
  },
  paintings: {
    title: "Paintings",
    description: "Wall art that anchors a room with colour and calm.",
    category: "paintings",
  },
  furniture: {
    title: "Furniture",
    description: "Consoles, bar trolleys, and pieces that host conversation.",
    category: "furniture",
  },
  "bar-trolleys": {
    title: "Bar Trolleys",
    description: "Roll in hospitality with brass and glass.",
    category: "furniture",
    subcategory: "bar-trolleys",
  },
  consoles: {
    title: "Consoles",
    description: "Entryway furniture with sculptural flair.",
    category: "furniture",
    subcategory: "consoles",
  },
  sale: {
    title: "Sale",
    description: "Curated luxury pieces at kinder prices—while stocks last.",
    filter: "sale",
  },
};

/** Decor Kart–style circular category strip */
export const circleCollections = [
  {
    title: "New Arrivals",
    href: "/collections/new-arrivals",
    image: "/collections/cat-new-arrivals.jpg",
  },
  {
    title: "Decor",
    href: "/collections/home-decor",
    image: "/collections/cat-decor.jpg",
  },
  {
    title: "Dinnerware",
    href: "/collections/dinnerware",
    image: "/collections/cat-dinnerware.jpg",
  },
  {
    title: "Glassware",
    href: "/collections/glassware",
    image: "/collections/cat-glassware.jpg",
  },
  {
    title: "Lighting",
    href: "/collections/lighting",
    image: "/collections/cat-lighting.jpg",
  },
  {
    title: "Paintings",
    href: "/collections/paintings",
    image: "/collections/cat-paintings.jpg",
  },
  {
    title: "Furniture",
    href: "/collections/furniture",
    image: "/collections/cat-furniture.jpg",
  },
  {
    title: "Clocks",
    href: "/collections/clocks",
    image: "/collections/cat-clocks.jpg",
  },
  {
    title: "Bar Trolleys",
    href: "/collections/bar-trolleys",
    image: "/collections/cat-bar-trolley.jpg",
  },
  {
    title: "Planters",
    href: "/collections/planters",
    image: "/products/the-arlo-woven-vessel.jpg",
  },
];

export const editorialBands = [
  {
    eyebrow: "The art of the table",
    title: "Dinnerware & glass for gatherings",
    body: "Tea services, art glass, and serving pieces made for conversation.",
    href: "/collections/dinnerware",
    cta: "Shop dinnerware",
    image: "/products/curated/prod-tea-set.jpg",
    imageAlt: "Heritage brass tea service",
  },
];

/** @deprecated use circleCollections */
export const shopByCategory = circleCollections.map((c) => ({
  title: c.title,
  href: c.href,
  image: c.image,
  blurb: "",
}));
