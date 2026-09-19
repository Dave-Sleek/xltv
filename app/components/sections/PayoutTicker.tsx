const WINNERS = [
  { name: "Khan N", amount: "$4,000", quote: "Took my family on the trip of a lifetime" },
  { name: "Sunny L", amount: "$800", quote: "Launched my own podcast" },
  { name: "Ahmed M", amount: "$50,000", quote: "Paid off my debt and sons tuition" },
  { name: "Priya S", amount: "$12,500", quote: "Funded my startup's first hire" },
];

export function PayoutTicker() {
  return (
    <section className="border-y border-gray-100 bg-white py-6">
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {WINNERS.map((w) => (
          <div
            key={w.name}
            className="flex min-w-[280px] flex-shrink-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
          >
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">
              Won {w.amount}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{w.name}</p>
              <p className="text-gray-500 line-clamp-1">"{w.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}