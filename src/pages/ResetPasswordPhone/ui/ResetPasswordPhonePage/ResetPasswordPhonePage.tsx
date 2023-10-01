import React from 'react'
import cls from './ResetPasswordPhonePage.module.scss'
import { ResetPasswordPhone } from '@/features/ResetPasswordPhone'
import clsx from 'clsx'

const ResetPasswordPhonePage = () => {
  return (
    <div className={clsx(cls.ResetPasswordPhonePage)}>
      <ResetPasswordPhone/>
    </div>
  )
}

export default ResetPasswordPhonePage
