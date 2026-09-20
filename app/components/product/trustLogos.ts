// components/product/trustLogos.ts

export type TrustLogo = {
  name: string;
  src: string;      // path to SVG or PNG in /public/logos
};

export type TrustMarqueeData = {
  label: string;                        // e.g. "Trusted by leading brands"
  logos: TrustLogo[];
  variant?: "light" | "dark";           // background theme
};

export const TRUST_MARQUEE_DATA: Record<string, TrustMarqueeData> = {
  /* ── RevenueOS ── */
  "revenue-os": {
    label: "Trusted by revenue teams at",
    variant: "light",
    logos: [
      { name: "Pearl Naturelle", src: "/logos/pearl.svg" },
      { name: "Myco",            src: "/logos/myco.svg" },
      { name: "Northwind",       src: "/logos/northwind.svg" },
      { name: "Candy Co.",       src: "/logos/candy.svg" },
      { name: "KFC",             src: "/logos/kfc.svg" },
      { name: "Lay's",           src: "/logos/lays.svg" },
      { name: "McDonald's",      src: "/logos/mcdonalds.svg" },
      { name: "Doritos",         src: "/logos/doritos.svg" },
    ],
  },

  /* ── DeclineOS ── */
  "decline-os": {
    label: "Recovering revenue through",
    variant: "light",
    logos: [
      { name: "Stripe",   src: "/logos/stripe.svg" },
      { name: "Adyen",    src: "/logos/adyen.svg" },
      { name: "Checkout", src: "/logos/checkout.svg" },
      { name: "Worldpay", src: "/logos/worldpay.svg" },
      { name: "PayPal",   src: "/logos/paypal.svg" },
      { name: "Braintree",src: "/logos/braintree.svg" },
      { name: "Authorize.net", src: "/logos/authorize.svg" },
      { name: "Cybersource",   src: "/logos/cybersource.svg" },
    ],
  },

  /* ── AcquireOS ── */
  "acquire-os": {
    label: "Connected to top acquirers and networks",
    variant: "light",
    logos: [
      { name: "Visa",       src: "/logos/visa.svg" },
      { name: "Mastercard", src: "/logos/mastercard.svg" },
      { name: "Amex",       src: "/logos/amex.svg" },
      { name: "Discover",   src: "/logos/discover.svg" },
      { name: "JCB",        src: "/logos/jcb.svg" },
      { name: "UnionPay",   src: "/logos/unionpay.svg" },
      { name: "Diners",     src: "/logos/diners.svg" },
      { name: "Maestro",    src: "/logos/maestro.svg" },
    ],
  },

  /* ── RewardOS ── */
  "reward-os": {
    label: "Campaigns run with",
    variant: "light",
    logos: [
      { name: "Pearl Naturelle", src: "/logos/pearl.svg" },
      { name: "Myco",            src: "/logos/myco.svg" },
      { name: "KFC",             src: "/logos/kfc.svg" },
      { name: "Lay's",           src: "/logos/lays.svg" },
      { name: "McDonald's",      src: "/logos/mcdonalds.svg" },
      { name: "Candy Co.",       src: "/logos/candy.svg" },
      { name: "Northwind",       src: "/logos/northwind.svg" },
      { name: "Doritos",         src: "/logos/doritos.svg" },
    ],
  },

  /* ── PayOS ── */
  "pay-os": {
    label: "Settling through global payment rails",
    variant: "light",
    logos: [
      { name: "SWIFT",   src: "/logos/swift.svg" },
      { name: "SEPA",    src: "/logos/sepa.svg" },
      { name: "ACH",     src: "/logos/ach.svg" },
      { name: "FedNow",  src: "/logos/fednow.svg" },
      { name: "Faster Payments", src: "/logos/faster.svg" },
      { name: "UPI",     src: "/logos/upi.svg" },
      { name: "PIX",     src: "/logos/pix.svg" },
      { name: "Wire",    src: "/logos/wire.svg" },
    ],
  },
};