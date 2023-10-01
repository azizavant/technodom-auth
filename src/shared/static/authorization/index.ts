import { type socialIconsType } from '@/shared/types/authorization'

export const socialIcons: socialIconsType[] = [
  {
    id: 1,
    icon: 'src/shared/assets/icons/authorization/google.svg',
    href: import.meta.env.VITE_GOOGLE_AUTHORIZATION_URL,
    alt: 'google'
  },
  {
    id: 2,
    icon: 'src/shared/assets/icons/authorization/facebook.svg',
    href: 'facebook',
    alt: 'facebook'
  },
  {
    id: 3,
    icon: 'src/shared/assets/icons/authorization/apple.svg',
    href: 'apple',
    alt: 'apple'
  }
]
