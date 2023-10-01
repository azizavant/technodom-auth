import React from 'react'
import cls from './ResetPasswordPhonePage.module.scss'
import { classNames } from '@/shared/lib'
import { PreviewImage } from '@/shared/ui/PreviewImage'
import { ResetPasswordPhone } from '@/features/ResetPasswordPhone'

const ResetPasswordPhonePage = () => {
  return (
    <div className={classNames(cls.ResetPasswordPhonePage)}>
      <ResetPasswordPhone/>
      <PreviewImage
        img="/src/shared/assets/icons/reset/preview.png"
        alt="table"
        viewport
      />
    </div>
  )
}

// http://localhost:3000/src/shared/assets/icons/reset/preview.png
// http://localhost:3000/reset-password/src/shared/assets/icons/reset/preview.png

export default ResetPasswordPhonePage
