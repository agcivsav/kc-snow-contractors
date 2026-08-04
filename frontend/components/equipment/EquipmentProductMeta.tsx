import type { EquipmentItem } from "@/data/equipment";

type EquipmentProductMetaProps = {
  item: EquipmentItem;
};

export function EquipmentProductMeta({ item }: EquipmentProductMetaProps) {
  const identity = [
    { label: "Make", value: item.make },
    { label: "Model", value: item.modelNumber },
    { label: "Year", value: item.year },
  ];

  return (
    <div className="space-y-6">
      <dl className="grid grid-cols-3 gap-4 rounded-xl border border-gray-200 bg-white p-4">
        {identity.map((field) => (
          <div key={field.label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {field.label}
            </dt>
            <dd className="mt-1 text-base font-bold text-gray-900">{field.value}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-2 gap-3">
        {item.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3.5"
          >
            <div className="text-lg font-extrabold text-gray-900 leading-tight">{stat.num}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
