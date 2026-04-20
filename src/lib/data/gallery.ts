export type GalleryImageData = {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
  order: number
  active: boolean
}

export type GallerySettingsData = {
  enabled: boolean
  title: string
  description: string
  eyebrow: string
  heroImage?: string
}

export const gallerySettings: GallerySettingsData = {
  enabled: true,
  eyebrow: 'Galerie',
  title: 'Quelques instants',
  description:
    "Des espaces, des pauses, des respirations. L'univers dans lequel j'accompagne les dirigeant·e·s.",
  heroImage:
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1920&q=80',
}

export const galleryImages: GalleryImageData[] = [
  {
    _id: 'gal-2',
    title: 'Clarté',
    imageUrl:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 2,
    active: true,
  },
  {
    _id: 'gal-3',
    title: 'La question de la semaine',
    description: "Chaque semaine, une question pour revenir à l'essentiel.",
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    category: 'Journal',
    order: 3,
    active: true,
  },
  {
    _id: 'gal-4',
    title: 'Your rules, your game',
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 4,
    active: true,
  },
  {
    _id: 'gal-5',
    title: 'Liberté',
    imageUrl:
      'https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 5,
    active: true,
  },
  {
    _id: 'gal-6',
    title: 'Présence',
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 6,
    active: true,
  },
  {
    _id: 'gal-7',
    title: 'Un café, une question',
    imageUrl:
      'https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 7,
    active: true,
  },
  {
    _id: 'gal-9',
    title: 'Horizons',
    description: "Aller vers des horizons qui paraissaient impossibles à imaginer.",
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    category: 'Atmosphère',
    order: 9,
    active: true,
  },
]

export function getActiveImages(): GalleryImageData[] {
  return [...galleryImages]
    .filter((i) => i.active)
    .sort((a, b) => a.order - b.order)
}
