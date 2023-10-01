import React from 'react'
import { RegistrationForm } from '@/features/RegistrationForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RegistrationPage.module.scss'
import { PreviewImage } from '@/shared/ui/PreviewImage'

const RegistrationPage = () => {
  return (
    <div className={classNames(cls.Registration)}>
      <RegistrationForm/>
      <PreviewImage
        img="src/pages/Registration/icons/preview.png"
        alt="car"
      />
    </div>
  )
}

export default RegistrationPage
