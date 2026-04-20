export type BlogPostData = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  published: boolean
  publishedAt: string
  updatedAt: string
  metaTitle?: string
  metaDescription?: string
}

export type BlogSettingsData = {
  enabled: boolean
  title: string
  description: string
  eyebrow: string
  heroImage?: string
  categories: string[]
}

export const blogSettings: BlogSettingsData = {
  enabled: true,
  eyebrow: 'Le journal',
  title: "Chaque semaine, une question pour revenir à l'essentiel",
  description:
    "Des réflexions courtes pour mêler réussite et équilibre, sans t'épuiser ni tout changer.",
  heroImage:
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1920&q=80',
  categories: ['Coaching', 'Leadership', 'Équilibre'],
}

export const blogPosts: BlogPostData[] = [
  {
    _id: 'post-1',
    title: "De dirigeant·e en expansion à humain·e qui respire",
    slug: 'de-dirigeante-en-expansion-a-humaine-qui-respire',
    excerpt:
      "Clarté. Liberté. Présence. Trois appuis pour mêler réussite et équilibre — sans t'épuiser, ni tout changer.",
    content: `<p>Tu es dirigeant·e. Tu es en expansion. Et quelque part, tu aimerais aussi être un·e humain·e qui respire.</p>
<p>Ce que j'observe, à force d'accompagner des dirigeant·e·s : on est parfois surpris à quel point de minuscules changements peuvent avoir un impact énorme sur nos vies. Le coaching est un outil puissant et percutant. J'aide mes clients à faire ces changements subtils qui changent tout.</p>
<p>Clarté sur ce qui compte vraiment. Liberté de choisir ta direction. Présence à toi, à tes équipes, à ta vie. Your rules, your game.</p>
<p>Mon rôle, c'est de t'accompagner pour mêler réussite et équilibre, et aller vers des horizons qui te paraissaient encore impossibles à imaginer avant qu'on se rencontre.</p>`,
    coverImage:
      'https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&w=1600&q=80',
    category: 'Coaching',
    tags: ['clarté', 'liberté', 'présence', 'équilibre'],
    author: 'Aurélie Foin',
    published: true,
    publishedAt: '2026-04-15T08:00:00.000Z',
    updatedAt: '2026-04-15T08:00:00.000Z',
    metaTitle: "De dirigeant·e en expansion à humain·e qui respire | Aurélie Foin",
    metaDescription:
      "Clarté. Liberté. Présence. Trois appuis pour mêler réussite et équilibre, sans t'épuiser ni tout changer.",
  },
  {
    _id: 'post-2',
    title: "Ton antidoute dans l'incertitude",
    slug: 'ton-antidoute-dans-lincertitude',
    excerpt:
      "Plus on monte haut, plus il devient difficile de trouver des personnes qui nous parlent franchement.",
    content: `<p>Plus on monte haut, plus il est difficile de trouver des personnes qui nous parlent franchement, avec qui être dans la « vérité ».</p>
<p>Je suis cette personne qui te dit ce que tu as le plus besoin d'entendre. Pas pour te flatter. Pas pour te rassurer. Pour t'aider à voir clair, à décider juste, à avancer sans te perdre.</p>
<p>C'est ça, être ton antidoute dans l'incertitude : un espace où tu peux déposer les doutes, les tensions, les questions qui tournent, et repartir plus aligné·e.</p>
<p>Prêt·e à viser l'impossible ? On commence par un coaching de 30 minutes, sans engagement financier.</p>`,
    coverImage:
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=80',
    category: 'Leadership',
    tags: ['vérité', 'décision', 'leadership', 'incertitude'],
    author: 'Aurélie Foin',
    published: true,
    publishedAt: '2026-04-08T08:00:00.000Z',
    updatedAt: '2026-04-08T08:00:00.000Z',
    metaTitle: "Ton antidoute dans l'incertitude | Aurélie Foin",
    metaDescription:
      "Plus on monte haut, plus il devient difficile de trouver des personnes qui nous parlent franchement. Être là, franchement.",
  },
  {
    _id: 'post-3',
    title: 'Les minuscules changements qui changent tout',
    slug: 'les-minuscules-changements-qui-changent-tout',
    excerpt:
      "On est parfois surpris à quel point de minuscules changements peuvent avoir un impact énorme sur nos vies.",
    content: `<p>On est parfois surpris à quel point de minuscules changements peuvent avoir un impact énorme sur nos vies.</p>
<p>Le coaching est un outil puissant et percutant. Pas parce qu'il renverse tout. Parce qu'il vise juste.</p>
<p>Ce que j'aime dans mon métier, c'est d'aider mes clients à faire ces changements subtils qui changent tout. Une décision reportée depuis des mois qui se prend en dix minutes. Une conversation difficile enfin ouverte. Une priorité qui retrouve sa place.</p>
<p>Sans t'épuiser. Ni tout changer.</p>`,
    coverImage:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1600&q=80',
    category: 'Coaching',
    tags: ['changement', 'décision', 'coaching'],
    author: 'Aurélie Foin',
    published: true,
    publishedAt: '2026-04-01T08:00:00.000Z',
    updatedAt: '2026-04-01T08:00:00.000Z',
    metaTitle: 'Les minuscules changements qui changent tout | Aurélie Foin',
    metaDescription:
      "Pourquoi les petits changements transforment plus vite que les grandes révolutions. Sans t'épuiser, ni tout changer.",
  },
  {
    _id: 'post-4',
    title: "Pour toi, si tu es talentueux·se et ambitieux·se",
    slug: 'pour-toi-si-tu-es-talentueux-et-ambitieux',
    excerpt:
      "Tu adores être dans l'action. Tu as l'habitude de réussir. Et en même temps, tu t'épuises.",
    content: `<p>Les points communs entre mes clients ? Ils sont talentueux et ambitieux. Ils adorent être dans l'action. Ils ont l'habitude de réussir ce qu'ils entreprennent. Ils veulent offrir un haut niveau de qualité à leurs clients.</p>
<p>J'adore cet état d'esprit.</p>
<p>Et en même temps, ils ont tendance à s'épuiser, vivent beaucoup de doutes, ils ont l'impression qu'il n'y a pas de mérite sans efforts, ils ont des réticences à déléguer, ils ont du mal à savoir s'arrêter et à célébrer leurs succès.</p>
<p>Si tu te reconnais, c'est normal. Et c'est exactement là qu'on va travailler ensemble : garder l'ambition, retrouver le souffle. Your rules, your game.</p>`,
    coverImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    category: 'Équilibre',
    tags: ['ambition', 'équilibre', 'dirigeant', 'doutes'],
    author: 'Aurélie Foin',
    published: true,
    publishedAt: '2026-03-25T08:00:00.000Z',
    updatedAt: '2026-03-25T08:00:00.000Z',
    metaTitle: 'Talentueux·se, ambitieux·se, fatigué·e ? | Aurélie Foin',
    metaDescription:
      "Garder l'ambition, retrouver le souffle. Un coaching pour les dirigeant·e·s qui réussissent — et s'épuisent.",
  },
]

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug && p.published)
}

export function getPublishedPosts(): BlogPostData[] {
  return [...blogPosts]
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
}
