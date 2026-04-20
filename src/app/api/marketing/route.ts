import { NextResponse } from 'next/server'

const defaultPopup = {
  enabled: false,
  title: '',
  description: '',
  buttonText: '',
  buttonLink: '#',
  imageUrl: '',
  bgColor: '#fff6ee',
  textColor: '#3a271a',
  buttonColor: '#e8a98b',
  delay: 5,
}

export async function GET() {
  return NextResponse.json(defaultPopup)
}
