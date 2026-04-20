export const siteConfig = {
  name: 'Aurélie Foin',
  url: 'https://www.dinguedecerveau.fr',
  locale: 'fr_FR',
  description:
    "Ton antidoute dans l'incertitude. Coach de dirigeant·e·s pour mêler réussite et équilibre, sans t'épuiser ni tout changer.",
  ogImage: 'https://www.dinguedecerveau.fr/og.png',
  twitterHandle: '@aureliefoin',
  themeColor: '#e8a98b',
  phone: '07 68 14 40 19',
  email: 'contact@dinguedecerveau.fr',
  address: {
    street: '',
    city: '',
    postalCode: '',
    country: 'FR',
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
  '/a-propos',
  '/services',
  '/gallery',
  '/blog',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
