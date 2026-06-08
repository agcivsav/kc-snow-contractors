import Link from "next/link";
import type { EquipmentItem } from "@/data/equipment";
import { EquipmentGallery } from "./EquipmentGallery";
import { EquipmentProductMeta } from "./EquipmentProductMeta";

type EquipmentDetailContentProps = {
  item: EquipmentItem;
};

export function EquipmentDetailContent({ item }: EquipmentDetailContentProps) {
  return (
    <>
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-600">Home</Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-yellow-600">Inventory</Link>
            <span>/</span>
            <span className="text-gray-900">{item.model}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <EquipmentGallery images={item.gallery} />
            <div>
              <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Available Now
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                {item.model}
              </h1>
              <p className="text-xl text-yellow-600 font-semibold mb-4">{item.category}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
              <EquipmentProductMeta item={item} />
              <Link href="/quote" className="btn-primary text-sm mt-8 inline-flex">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What It&apos;s Used For</h2>
              <div className="space-y-3">
                {item.applications.map((app) => (
                  <div
                    key={app.title}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-400"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{app.title}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{app.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Full Specifications</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {item.specs.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-gray-700 w-44">{spec.label}</td>
                        <td className="px-4 py-3 text-gray-900 font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{item.ctaHeading}</h2>
          <p className="text-gray-400 mb-8">{item.ctaDescription}</p>
          <Link href="/quote" className="btn-primary text-sm">Get a Quote Now</Link>
        </div>
      </section>
    </>
  );
}
