import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailContent } from "@/components/equipment/EquipmentDetailContent";
import {
  getEquipmentBySlug,
  getEquipmentSlugs,
  type EquipmentItem,
} from "@/data/equipment";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getEquipmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) return { title: "Equipment Not Found" };
  return {
    title: item.metaTitle,
    description: item.metaDescription,
  };
}

function ProductJsonLd({ item }: { item: EquipmentItem }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.title,
    description: item.description,
    image: item.gallery.map((img) => img.src),
    brand: { "@type": "Brand", name: "CASE" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "RPM Equipment Leasing" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function InventoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <ProductJsonLd item={item} />
      <EquipmentDetailContent item={item} />
    </>
  );
}
