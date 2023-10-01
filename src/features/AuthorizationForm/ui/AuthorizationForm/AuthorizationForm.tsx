import React, { useState } from 'react'
import cls from './AuthorizationForm.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useNavigate } from '@tanstack/react-location'
import clsx from 'clsx'

interface AuthorizationFormProps {
  className?: string
}

export const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ className }) => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={clsx(cls.AuthorizationForm, {}, [className])}>
      <div className={cls.Content}>
        <div className="flex flex-col items-center gap-2 xs:gap-1.5">
          <h2 className="text-lightblue font-bold text-4xl xs:text-3xl">Авторизация</h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-[32px] xs:text-2xl not-italic font-semibold">Добро пожаловать</h2>
            <span className="text-gray flex justify-center">Пожалуйста, введите свои данные.</span>
          </div>
        </div>
        <div className="w-full">
          <div className="my-5">
            <Input
              label="Email"
              placeholder="Введите Email"
              type="email"
            />
            <Input
              label="Пароль"
              placeholder="Введите Пароль"
              type={showPassword ? 'text' : 'password'}
              className="mt-3.5"
              showPassword={showPassword}
              setShowPassword={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="mt-2.5 text-lightblue hover:cursor-pointer">Забыли пароль?</div>
          <div className="mt-3">
            <Button
              className="px-[18px] py-2.5 bg-lightblue text-white font-medium rounded-lg w-full"
            >
              Войти
            </Button>
          </div>
          <div className="flex gap-1.5 mt-6 xs:mt-4 justify-center hover:cursor-pointer">
            <span className="text-gray xs:text-sm">У вас нет аккаунта?</span>
            <span
              onClick={() => navigate({ to: '/survey' })}
              className="text-lightblue xs:text-sm"
            >Стать партнером</span>
          </div>
        </div>
      </div>
    </div>
  )
}


