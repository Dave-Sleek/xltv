"use client";

import { GLOBAL_REACH_DATA } from "./globalReachData";
import { StatsGridLayout } from "./global-reach-layouts/StatsGridLayout";
import { RadialLayout } from "./global-reach-layouts/RadialLayout";
import { PipelineLayout } from "./global-reach-layouts/PipelineLayout";
import { TrophyTickerLayout } from "./global-reach-layouts/TrophyTickerLayout";
import { GlobeLayout } from "./global-reach-layouts/GlobeLayout";

export function GlobalReach({ slug }: { slug: string }) {
  const data = GLOBAL_REACH_DATA[slug];
  if (!data) return null;

  switch (slug) {
    case "revenue-os":
      return <StatsGridLayout data={data} />;
    case "decline-os":
      return <RadialLayout data={data} />;
    case "acquire-os":
      return <PipelineLayout data={data} />;
    case "reward-os":
      return <TrophyTickerLayout data={data} />;
    case "pay-os":
      return <GlobeLayout data={data} />;
    default:
      return <StatsGridLayout data={data} />;
  }
}