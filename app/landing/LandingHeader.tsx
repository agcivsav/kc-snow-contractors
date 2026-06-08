import Image from "next/image";
import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="#" className="inline-flex items-center" aria-label="RPM Equipment Leasing home">
          <Image
            src="/logo.svg"
            alt="RPM Equipment Leasing"
            width={360}
            height={120}
            priority
            className="h-12 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
