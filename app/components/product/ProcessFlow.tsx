// components/product/ProcessFlow.tsx

import type { Product } from "@/app/lib/products";
import { NumberedStepsLayout } from "./process-flow-layouts/NumberedStepsLayout";
import { VerticalTimelineLayout } from "./process-flow-layouts/VerticalTimelineLayout";
import { HorizontalPipelineLayout } from "./process-flow-layouts/HorizontalPipelineLayout";
import { CardStackLayout } from "./process-flow-layouts/CardStackLayout";
import { ZigzagLayout } from "./process-flow-layouts/ZigzagLayout";

export function ProcessFlow({
  steps,
  productName,
  slug,
}: {
  steps: Product["processSteps"];
  productName: string;
  slug: string;
}) {
  switch (slug) {
    case "revenue-os":
      return <NumberedStepsLayout steps={steps} productName={productName} />;
    case "decline-os":
      return <VerticalTimelineLayout steps={steps} productName={productName} />;
    case "acquire-os":
      return <HorizontalPipelineLayout steps={steps} productName={productName} />;
    case "reward-os":
      return <CardStackLayout steps={steps} productName={productName} />;
    case "pay-os":
      return <ZigzagLayout steps={steps} productName={productName} />;
    default:
      return <NumberedStepsLayout steps={steps} productName={productName} />;
  }
}