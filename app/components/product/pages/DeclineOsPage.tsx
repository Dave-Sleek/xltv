<ProductHero product={product} />
<HeroKpi product={product} />
<ImageFeatureSection
  image={product.visuals.primary}
  eyebrow="Before / After"
  headline="From declined to recovered in under a second."
  body="DeclineOS intercepts the decline, reroutes it through the optimal processor, and recovers the transaction — all automatically."
  imageSide="right"
/>
<MetricGrid metrics={product.metrics} />
<CapabilitiesList {...} />
<ImageFeatureSection
  image={product.visuals.secondary}
  eyebrow="Command Center"
  headline="Live recovery performance at a glance."
  body="Watch recoveries happen in real time across every acquirer and geography."
  imageSide="left"
  dark
/>
<ProcessFlow {...} />
<FaqAccordion items={declineFaqs} />
<ProductCta product={product} />