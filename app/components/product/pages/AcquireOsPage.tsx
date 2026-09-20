<ProductHero product={product} />
<HeroKpi product={product} />
<ImageFeatureSection
  image={product.visuals.primary}
  eyebrow="Merchant Pipeline"
  headline="From application to approved in 12–24 hours."
  body="AcquireOS orchestrates the entire merchant onboarding flow — scoring, matching, and routing each merchant to the best-fit acquirer."
  imageSide="right"
/>
<MetricGrid metrics={product.metrics} />
<ImageFeatureSection
  image={product.visuals.secondary}
  eyebrow="Merchant → Acquirer"
  headline="Every transaction flows through the optimal path."
  body="Our routing engine matches merchants with acquirers based on vertical, volume, geography, and risk profile."
  imageSide="left"
  dark
/>
<CapabilitiesList {...} />
<ProcessFlow {...} />
<FaqAccordion items={acquireFaqs} />
<ProductCta product={product} />