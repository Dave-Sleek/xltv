<ProductHero product={product} />
<HeroKpi product={product} />
<PrizeCardGallery />                       {/* Custom visual section */}
<MetricGrid metrics={product.metrics} />
<ImageFeatureSection
  image={product.visuals.secondary}
  eyebrow="Winners"
  headline="Real stories. Life-changing outcomes."
  body="Every campaign produces real winners. From $800 gift cards to $50K grand prizes, RewardOS turns user actions into life-changing moments."
  imageSide="right"
/>
<CapabilitiesList {...} />
<ProcessFlow {...} />
<FaqAccordion items={rewardFaqs} />
<ProductCta product={product} />