import type { Metadata } from 'next'

import { CoachingSection } from '@/components/sections/coaching-section'
import { CtaSection } from '@/components/sections/cta-section'
import { EntreprisesSection } from '@/components/sections/entreprises-section'
import { HeroSection } from '@/components/sections/hero-section'
import { JournalPreviewSection } from '@/components/sections/journal-preview-section'
import { LeadMagnetSection } from '@/components/sections/lead-magnet-section'
import { ReferencesSection } from '@/components/sections/references-section'
import { StatsSection } from '@/components/sections/stats-section'
import { StorySection } from '@/components/sections/story-section'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StorySection />
      <StatsSection />
      <CoachingSection />
      <EntreprisesSection />
      <JournalPreviewSection />
      <ReferencesSection />
      <LeadMagnetSection />
      <CtaSection />
    </>
  )
}
