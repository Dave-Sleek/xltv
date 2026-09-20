<ProductHero product={product} />
<HeroKpi product={product} />
<GlobalReachMap />                         {/* Custom visual section */}
<MetricGrid metrics={product.metrics} />
<CapabilitiesList {...} />
<ImageFeatureSection
  image={product.visuals.secondary}
  eyebrow="Settlement"
  headline="Real-time settlement across every corridor."
  body="Multi-currency payouts land in your account on your schedule — 24/7, across every supported market."
  imageSide="left"
  dark
/>
<ProcessFlow {...} />
<FaqAccordion items={payFaqs} />
<ProductCta product={product} />