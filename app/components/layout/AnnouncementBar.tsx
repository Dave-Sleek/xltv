import { Zap, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium">
        <Zap className="h-4 w-4" fill="currentColor" />
        <span>RevenueOS manages monetization from optimization through delivery</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}