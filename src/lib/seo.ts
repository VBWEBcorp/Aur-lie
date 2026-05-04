export const siteConfig = {
  name: 'Aurélie Foin',
  url: 'https://www.dinguedecerveau.fr',
  locale: 'fr_FR',
  description:
    "L'antidoute des dirigeants qui passent au niveau suivant. Coach TPE/PME spécialisée dans l'équilibre du dirigeant : coaching individuel, cercle de dirigeants, conférences, formations.",
  ogImage: 'https://www.dinguedecerveau.fr/og.png',
  twitterHandle: '@aureliefoin',
  themeColor: '#e8a98b',
  phone: '07 68 14 40 19',
  email: 'aurelie@dinguedecerveau.fr',
  address: {
    street: '',
    city: 'Lille',
    postalCode: '',
    country: 'FR',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/aurelie-foin-coach/',
    instagram: 'https://www.instagram.com/aurelie_foin/',
    facebook: 'https://www.facebook.com/aurelie.foin.coach',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/coaching',
  '/coaching-individuel',
  '/cercles-de-dirigeants',
  '/conferences',
  '/formations',
  '/podcast',
  '/a-propos',
  '/journal',
  '/temoignages',
  '/guide-offert',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
