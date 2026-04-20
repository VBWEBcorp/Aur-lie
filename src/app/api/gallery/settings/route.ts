import { NextResponse } from 'next/server'

import { gallerySettings } from '@/lib/data/gallery'

export async function GET() {
  return NextResponse.json(gallerySettings)
}
