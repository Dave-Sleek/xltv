// components/layout/AnnouncementBar.tsx

import { Zap, ArrowRight } from "lucide-react";

export function AnnouncementBar({
  copy = "XLTV — AI-powered revenue intelligence for modern businesses",
  href = "#",
}: {
  copy?: string;
  href?: string;
}) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <a
        href={href}
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:opacity-90"
      >
        <Zap className="h-4 w-4" fill="currentColor" />
        <span className="text-center">{copy}</span>
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}