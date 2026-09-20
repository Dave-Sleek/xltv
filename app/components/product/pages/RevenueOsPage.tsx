// components/product/pages/RevenueOsPage.tsx
<ProductHero product={product} />
<HeroKpi product={product} />
<MetricGrid metrics={product.metrics} />
<DashboardPreview />                       {/* Live dashboard (already built) */}
<CapabilitiesList {...} />
<ImageFeatureSection
  image={product.visuals.secondary}
  eyebrow="Cohort intelligence"
  headline="Every customer, scored and optimized in real time."
  body="RevenueOS segments your customers into LTV cohorts and deploys monetization strategies for each one — automatically."
  bullets={["Predictive LTV scoring", "Real-time cohort updates", "Zero manual tuning"]}
  imageSide="left"
/>
<ProcessFlow {...} />
<FaqAccordion items={revenueFaqs} />
<ProductCta product={product} />