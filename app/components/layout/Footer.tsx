import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-2xl font-black tracking-tight text-gray-900">XLTV</p>
            <p className="mt-3 max-w-xs text-sm text-gray-600">
              AI-powered monetization intelligence for modern growth teams.
            </p>
          </div>
          {[
            { title: "Product", links: ["RevenueOS", "Pricing", "Integrations"] },
            { title: "Company", links: ["About", "Careers", "Press"] },
            { title: "Legal", links: ["Terms", "Privacy", "Permits"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-gray-900">{col.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-gray-900">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} XLTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}