import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90',
        className,
      )}
    >
      <img
        src="https://i.ibb.co/3yzV7Tbd/LOGO-Aur-lie.png"
        alt=""
        className="size-10 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
        width={40}
        height={40}
      />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
