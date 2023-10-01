import React from 'react'
import { RegistrationForm } from '@/features/RegistrationForm'
import cls from './RegistrationPage.module.scss'
import clsx from 'clsx'

const RegistrationPage = () => {
  return (
    <div className={clsx(cls.Registration)}>
      <RegistrationForm/>
    </div>
  )
}

export default RegistrationPage
