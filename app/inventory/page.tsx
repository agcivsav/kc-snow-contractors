import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EquipmentCard } from "@/components/equipment/EquipmentCard";
import { equipmentItems } from "@/data/equipment";

export const metadata: Metadata = {
  title: "Equipment Inventory | RPM Equipment Leasing – Kansas City",
  description:
    "Browse our CASE equipment inventory — 321F compact wheel loader, 521F wheel loader, and SV280B skid steer. Available year-round for rent in Kansas City.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/case-321f-wheel-loader.jpg"
          alt="CASE equipment fleet in Kansas City"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              Fleet Inventory
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Our Equipment
              <br />
              <span className="text-yellow-400">Ready to Rent</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              CASE wheel loaders and skid steers — proven machines for snow removal,
              construction, landscaping, and material handling across every season.
            </p>
            <Link href="/quote" className="btn-primary text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Available Equipment</h2>
            <p className="section-subheading mx-auto">
              Click any machine to view specs, photo gallery, and rental details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipmentItems.map((item) => (
              <EquipmentCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
