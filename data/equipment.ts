export type EquipmentSpec = { label: string; value: string };

export type EquipmentApplication = { title: string; desc: string };

export type EquipmentGalleryImage = { src: string; alt: string };

export type EquipmentCardStat = { val: string; label: string };

export type EquipmentItem = {
  slug: string;
  model: string;
  make: string;
  modelNumber: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  imageAlt: string;
  gallery: EquipmentGalleryImage[];
  cardStats: EquipmentCardStat[];
  stats: { num: string; label: string }[];
  specs: EquipmentSpec[];
  applications: EquipmentApplication[];
  metaTitle: string;
  metaDescription: string;
  ctaHeading: string;
  ctaDescription: string;
};

export const equipmentItems: EquipmentItem[] = [
  {
    slug: "compact-wheel-loader",
    model: "CASE 321F",
    make: "CASE",
    modelNumber: "321F",
    year: "2025",
    category: "Compact Wheel Loader",
    title: "CASE 321F Compact Wheel Loader",
    description:
      "74 hp — 25 mph top speed — Hydrostatic transmission — 13,633 lb operating weight. Built for productivity in tight spaces — snow, grading, and material handling.",
    tagline: "74 HP — 25 mph — Hydrostatic transmission — 13,633 lb",
    image: "/images/case-321f-wheel-loader.jpg",
    imageAlt: "CASE 321F Compact Wheel Loader",
    gallery: [
      { src: "/images/321F-1.png", alt: "CASE 321F front view" },
      { src: "/images/321F-2.png", alt: "Operator cab view on job site" },
      { src: "/images/case321F.png", alt: "Snow removal operations" },
    ],
    cardStats: [
      { val: "74 HP", label: "Horsepower" },
      { val: "25 mph", label: "Top Speed" },
      { val: "13,633 lb", label: "Op. Weight" },
    ],
    stats: [
      { num: "74 HP", label: "Net Power" },
      { num: "25 mph", label: "Top Speed" },
      { num: "13,633 lb", label: "Operating Weight" },
      { num: "2-Speed", label: "Hydrostatic Trans." },
    ],
    specs: [
      { label: "Engine", value: "FPT F5HFL463A*F003, Tier 4 Final" },
      { label: "Net Power", value: "74 HP (55.2 kW)" },
      { label: "Operating Weight", value: "13,633 lb (6,183 kg)" },
      { label: "Top Speed", value: "25 mph (40 km/h)" },
      { label: "Transmission", value: "Hydrostatic, 2-speed" },
      { label: "Steering", value: "Articulated, center-pivot" },
      { label: "Bucket Capacity", value: "1.3–1.7 yd³ (1.0–1.3 m³)" },
      { label: "Tipping Load", value: "9,006 lb (4,085 kg) straight" },
      { label: "Breakout Force", value: "14,991 lb (6,800 kg)" },
      { label: "Fuel Tank", value: "23.8 gal (90 L)" },
      { label: "ROPS/FOPS", value: "Enclosed cab standard" },
      { label: "Hydraulic Flow", value: "Standard & High-Flow available" },
    ],
    applications: [
      { title: "Snow Removal", desc: "Articulated steering handles tight lot turns. Fast road speed means more lots per shift." },
      { title: "Site Preparation", desc: "Powerful breakout force for grading, backfilling, and moving heavy aggregate." },
      { title: "Material Handling", desc: "1.3–1.7 yd³ bucket capacity. Handles mulch, gravel, topsoil, and fill material." },
      { title: "Landscaping", desc: "Precise hydrostatic controls for finish grading and landscape installation." },
      { title: "Construction Support", desc: "Multi-month rentals available — ideal for phased construction projects." },
    ],
    metaTitle: "Rent CASE 321F Compact Wheel Loader | Kansas City",
    metaDescription:
      "Rent the CASE 321F Compact Wheel Loader in Kansas City. 74 HP, 25 mph, hydrostatic transmission. Perfect for snow removal, grading, and material handling.",
    ctaHeading: "Ready to Rent the 321F?",
    ctaDescription: "Daily, weekly, and monthly rates. Delivery available across our service area.",
  },
  {
    slug: "521f",
    model: "CASE 521F",
    make: "CASE",
    modelNumber: "521F",
    year: "2025",
    category: "Wheel Loader",
    title: "CASE 521F Wheel Loader",
    description:
      "121 hp — Powershift transmission — 19,500+ lb operating weight — 2.5–3.5 yd³ bucket. Built for high-production loading and snow management at larger sites.",
    tagline: "121 HP — Powershift Transmission — 2.5–3.5 yd³ Bucket — 19,500 lb",
    image: "/images/case-sv280b-skid-steer.jpg",
    imageAlt: "CASE 521F Wheel Loader",
    gallery: [
      { src: "/images/512F.png", alt: "CASE 521F on construction site" },
      { src: "/images/521f.png", alt: "High-volume snow management" },
      { src: "/images/case521f.png", alt: "Job site operations" },
    ],
    cardStats: [
      { val: "121 HP", label: "Horsepower" },
      { val: "2.5–3.5 yd³", label: "Bucket" },
      { val: "19,500 lb", label: "Op. Weight" },
    ],
    stats: [
      { num: "121 HP", label: "Net Power" },
      { num: "2.5–3.5 yd³", label: "Bucket Capacity" },
      { num: "19,500 lb", label: "Operating Weight" },
      { num: "Powershift", label: "Transmission" },
    ],
    specs: [
      { label: "Engine", value: "FPT N67, Tier 4 Final" },
      { label: "Net Power", value: "121 HP (90 kW)" },
      { label: "Operating Weight", value: "19,500 lb (8,845 kg)" },
      { label: "Transmission", value: "Powershift, 4-speed F/R" },
      { label: "Steering", value: "Articulated, center-pivot" },
      { label: "Bucket Capacity", value: "2.5–3.5 yd³ (1.9–2.7 m³)" },
      { label: "Tipping Load (straight)", value: "15,750 lb (7,144 kg)" },
      { label: "Breakout Force", value: "26,400 lb (11,975 kg)" },
      { label: "Top Speed", value: "24.9 mph (40 km/h)" },
      { label: "Fuel Tank", value: "44.5 gal (168 L)" },
      { label: "ROPS/FOPS", value: "Enclosed cab standard" },
      { label: "Hydraulic System", value: "Load-sensing, variable-flow" },
    ],
    applications: [
      { title: "High-Volume Snow Management", desc: "Larger bucket means fewer passes per lot. The 521F moves serious snow volume at commercial properties." },
      { title: "Aggregate & Material Loading", desc: "2.5–3.5 yd³ capacity handles gravel, sand, and fill at production loading rates." },
      { title: "Road Base & Infrastructure", desc: "Powershift transmission and high breakout force handle compacted material and road base work." },
      { title: "Construction Site Support", desc: "Long-term monthly rentals available for multi-phase construction projects." },
      { title: "Land Clearing", desc: "High ground clearance and strong hydraulics for clearing brush, debris, and demolition material." },
    ],
    metaTitle: "Rent CASE 521F Wheel Loader | Kansas City",
    metaDescription:
      "Rent the CASE 521F Wheel Loader in Kansas City. 121 HP, powershift transmission, 2.5–3.5 yd³ bucket capacity.",
    ctaHeading: "Ready to Rent the 521F?",
    ctaDescription: "Daily, weekly, and monthly rates. Delivery available.",
  },
  {
    slug: "skid-steer",
    model: "CASE SV280B",
    make: "CASE",
    modelNumber: "SV280B",
    year: "2025",
    category: "Skid Steer Loader",
    title: "CASE SV280B Skid Steer Loader",
    description:
      "Vertical lift design — High-flow hydraulics — All-around visibility — Universal attachment compatibility. The go-to machine for snow relocation, site prep, and landscaping.",
    tagline: "90 HP — 2,800 lb Rated Capacity — Vertical Lift — High-Flow Hydraulics",
    image: "/images/skid1.png",
    imageAlt: "CASE SV280B Skid Steer Loader",
    gallery: [
      { src: "/images/skid1.png", alt: "CASE SV280B skid steer loader" },
      { src: "/images/skid2.png", alt: "Cab view from inside the SV280B" },
      { src: "/images/skid3.png", alt: "Snow relocation and site work" },
    ],
    cardStats: [
      { val: "Vertical", label: "Lift Type" },
      { val: "High-Flow", label: "Hydraulics" },
      { val: "Universal", label: "Attachments" },
    ],
    stats: [
      { num: "90 HP", label: "Net Power" },
      { num: "2,800 lb", label: "Rated Capacity" },
      { num: "Vertical", label: "Lift Path" },
      { num: "40.2 gpm", label: "High-Flow Hydraulics" },
    ],
    specs: [
      { label: "Lift Path", value: "Vertical" },
      { label: "Rated Operating Capacity", value: "2,800 lb (1,270 kg)" },
      { label: "Tipping Load", value: "8,000 lb (3,628 kg)" },
      { label: "Operating Weight", value: "8,465 lb (3,840 kg)" },
      { label: "Net Horsepower", value: "90 HP (67 kW)" },
      { label: "Hydraulic Flow (Std)", value: "24.7 gpm (93.5 L/min)" },
      { label: "Hydraulic Flow (High)", value: "40.2 gpm (152.1 L/min)" },
      { label: "Ground Speed", value: "12.1 mph (19.5 km/h)" },
      { label: "Dump Height", value: "122 in (3,099 mm)" },
      { label: "Reach at Dump Height", value: "31.1 in (789 mm)" },
      { label: "Bucket Width", value: "72 in (1,829 mm) std" },
      { label: "Fuel Tank", value: "26.4 gal (100 L)" },
    ],
    applications: [
      { title: "Snow Relocation", desc: "Vertical lift gives max reach into snow trucks. High-flow runs snow blower attachments hard." },
      { title: "Landscaping", desc: "Grade, spread topsoil, install sod. Tight turning radius handles residential and commercial sites." },
      { title: "Site Demolition", desc: "Bucket, hydraulic breaker, or auger — swap attachments in minutes." },
      { title: "Loading & Moving", desc: "At 2,800 lb rated capacity, this machine handles heavy aggregate loads all day." },
      { title: "Utility Work", desc: "Trench digging, backfilling, material stockpiling — versatile for utility and infrastructure jobs." },
    ],
    metaTitle: "Rent CASE SV280B Skid Steer Loader | Kansas City",
    metaDescription:
      "Rent the CASE SV280B Skid Steer Loader in Kansas City. Vertical lift, high-flow hydraulics, 2,800 lb rated capacity.",
    ctaHeading: "Ready to Rent the SV280B?",
    ctaDescription: "Daily, weekly, and monthly rates. Attachment packages available.",
  },
];

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
  return equipmentItems.find((item) => item.slug === slug);
}

export function getEquipmentSlugs(): string[] {
  return equipmentItems.map((item) => item.slug);
}
