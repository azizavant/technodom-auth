import React from 'react'
import cls from './PreviewImage.module.scss'
import { classNames } from '@/shared/lib'
import { type Mods } from '@/shared/lib/classNames/classNames'

interface PreviewImageProps {
  viewport?: boolean
  img: string
  alt: string
}

export const PreviewImage: React.FC<PreviewImageProps> = ({ img, alt, viewport }) => {
  const mods: Mods = {
    [cls.ViewportHeight]: viewport
  }

  return (
    <img
      alt={alt}
      src={img}
      className={classNames(cls.RegistrationPreviewImage, mods)}
    />
  )
}
