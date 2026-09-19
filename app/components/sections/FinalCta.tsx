import Link from "next/link";

export function FinalCta() {
  return (
    <section id="demo" className="bg-gray-900 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Put XLTV to work
            <br />for you.
          </h2>
          <p className="mt-6 max-w-lg text-base text-gray-300">
            Launch your first campaign in minutes. Zero risk, up to 90% conversion
            uplift, and a flat fee per qualified action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#demo"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Book a Demo
            </Link>
            <Link
              href="#contact"
              className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Talk to Sales
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Current Prize Pool
          </p>
          <p className="mt-2 text-5xl font-bold tracking-tight">$101,172</p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Start</p>
              <p className="mt-1 font-semibold">Oct 1, 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">End</p>
              <p className="mt-1 font-semibold">Oct 14, 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Draw</p>
              <p className="mt-1 font-semibold">Oct 15, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}