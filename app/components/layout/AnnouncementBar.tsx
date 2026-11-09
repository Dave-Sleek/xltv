// components/layout/AnnouncementBar.tsx

import { ArrowRight } from "lucide-react";

export function AnnouncementBar({
  copy = "Following $5.5M raise, we're launching in Singapore, with Vietnam and the Philippines coming soon.",
  badge = "Early Access",
  href = "#",
}: {
  copy?: string;
  badge?: string;
  href?: string;
}) {
  return (
    <div
      className="w-full text-white"
      style={{
        background:
          "linear-gradient(90deg, #a78bfa 0%, #8b5cf6 45%, #93c5fd 100%)",
      }}
    >
      <a
        href={href}
        className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 text-sm font-medium transition hover:opacity-95 sm:gap-4 sm:px-6 sm:py-3.5"
      >
        {/* White pill badge */}
        <span className="flex-shrink-0 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-blue-700 sm:px-4 sm:text-xs">
          {badge}
        </span>

        {/* Copy */}
        <span className="hidden text-center text-sm font-semibold sm:inline sm:text-[15px]">
          {copy}
        </span>

        {/* Arrow */}
        <ArrowRight className="h-4 w-4 flex-shrink-0" />
      </a>

      {/* Mobile: shortened copy under the badge */}
      <div className="mx-auto -mt-2 flex max-w-7xl items-center justify-center px-4 pb-3 sm:hidden">
        <p className="text-center text-xs font-semibold leading-tight">
          Now launching in Singapore. Vietnam &amp; Philippines soon.
        </p>
      </div>
    </div>
  );
}