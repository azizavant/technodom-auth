import React from 'react'
import cls from './ResetPasswordPage.module.scss'
import { classNames } from '@/shared/lib'
import { PreviewImage } from '@/shared/ui/PreviewImage'
import { ResetPasswordChoose } from '@/features/ResetPasswordChoose'

const ResetPasswordPage = () => {
  return (
    <div className={classNames(cls.ResetPassword)}>
      <ResetPasswordChoose/>
      <PreviewImage
        img="src/shared/assets/icons/reset/preview.png"
        alt="table"
        viewport
      />
    </div>
  )
}

export default ResetPasswordPage
