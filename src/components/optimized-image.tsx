'use client'

import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  priority = false,
  sizes = "100vw"
}: OptimizedImageProps) {
  // Extract filename without extension
  const baseName = src.replace(/\.[^/.]+$/, "")
  
  return (
    <picture>
      <source 
        srcSet={`/optimized${baseName}.avif`}
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source 
        srcSet={`/optimized${baseName}.webp`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source 
        srcSet={`/optimized${baseName}-mobile.webp`}
        type="image/webp"
        media="(max-width: 767px)"
      />
      <Image
        src={`/optimized${baseName}-optimized.png`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        quality={90}
      />
    </picture>
  )
}