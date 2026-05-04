import type { Metadata } from 'next'

import { PodcastContent } from './podcast-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Le podcast et les interventions vidéo d'Aurélie Foin. Coaching, leadership, prise de parole, neurosciences."

export const metadata: Metadata = {
  title: 'Podcast',
  description,
  alternates: { canonical: '/podcast' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Podcast', description, '/podcast'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Podcast', path: '/podcast' },
    ]),
  ],
}

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PodcastContent />
    </>
  )
}
