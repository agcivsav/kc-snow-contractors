import Link from "next/link";
import type { EquipmentItem } from "@/data/equipment";

type EquipmentCardProps = {
  item: EquipmentItem;
};

export function EquipmentCard({ item }: EquipmentCardProps) {
  return (
    <Link href={`/inventory/${item.slug}`} className="card group block">
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="text-white font-bold text-lg">{item.model}</div>
          <div className="text-yellow-400 text-sm">{item.category}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {item.cardStats.map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 rounded-lg p-2">
              <div className="font-extrabold text-gray-900 text-sm">{stat.val}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
        <span className="btn-primary w-full text-center text-xs py-2.5">
          View Specs & Rent
        </span>
      </div>
    </Link>
  );
}
