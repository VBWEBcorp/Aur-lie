import type { Metadata } from 'next'

import { CerclesContent } from './cercles-content'
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Cercles de dirigeants : groupes de pairs animés par Aurélie Foin, coach TPE/PME à Lille. Le déclic en groupe, sans posture."

export const metadata: Metadata = {
  title: 'Cercles de dirigeants',
  description,
  alternates: { canonical: '/cercles-de-dirigeants' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Cercles de dirigeants', description, '/cercles-de-dirigeants'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Coaching', path: '/coaching' },
      { name: 'Cercles de dirigeants', path: '/cercles-de-dirigeants' },
    ]),
    serviceJsonLd(
      'Cercles de dirigeants',
      'Groupes de pairs animés pour dirigeants TPE/PME.',
      '/cercles-de-dirigeants',
    ),
  ],
}

export default function CerclesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CerclesContent />
    </>
  )
}
