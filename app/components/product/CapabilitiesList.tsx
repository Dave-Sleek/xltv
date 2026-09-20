// components/product/CapabilitiesList.tsx

import type { Product } from "@/app/lib/products";
import { NumberedRowsLayout } from "./capabilities-layouts/NumberedRowsLayout";
import { SplitGridLayout } from "./capabilities-layouts/SplitGridLayout";
import { IconCardsLayout } from "./capabilities-layouts/IconCardsLayout";
import { AlternatingLayout } from "./capabilities-layouts/AlternatingLayout";
import { AccordionLayout } from "./capabilities-layouts/AccordionLayout";

export function CapabilitiesList({
  capabilities,
  productName,
  slug,
}: {
  capabilities: Product["capabilities"];
  productName: string;
  slug: string;
}) {
  switch (slug) {
    case "revenue-os":
      return <NumberedRowsLayout capabilities={capabilities} productName={productName} />;
    case "decline-os":
      return <SplitGridLayout capabilities={capabilities} productName={productName} />;
    case "acquire-os":
      return <IconCardsLayout capabilities={capabilities} productName={productName} />;
    case "reward-os":
      return <AlternatingLayout capabilities={capabilities} productName={productName} />;
    case "pay-os":
      return <AccordionLayout capabilities={capabilities} productName={productName} />;
    default:
      return <NumberedRowsLayout capabilities={capabilities} productName={productName} />;
  }
}