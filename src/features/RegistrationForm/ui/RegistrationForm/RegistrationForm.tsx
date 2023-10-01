import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from '@tanstack/react-location'
import { type schemas } from '@/shared/api'
import { register } from '@/features/RegistrationForm/model/api/registration'
import cls from './RegistrationForm.module.scss'
import { Input } from '@/shared/ui/Input'
import { socialIcons } from '@/shared/static/authorization'
import { Button } from '@/shared/ui/Button/Button'
import clsx from 'clsx'

export const RegistrationForm = () => {

  const {
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<schemas['RegisterOrgRequest']>()

  // const { addUser } = useUserStore()
  const navigate = useNavigate()


  return (
    <div className={clsx(cls.RegistrationForm)}>
      <div className={cls.Content}>
        <p className="text-center text-3xl xs:text-2xl not-italic font-semibold pb-5 xs:pb-3 lg:pt-5">
          Регистрация
        </p>
        <Input
          label="Имя"
          placeholder="Введите имя"
        />
        <Input
          label="Фамилия"
          placeholder="Введите Фамилия"
          className="mt-4"
        />
        <Input
          label="Email"
          placeholder="Введите Email"
          className="mt-4"
        />
        <Input
          label="Номер телефона"
          placeholder="+7 (777) 777 77 77"
          className="mt-4"
        />
        <Input
          label="Пароль"
          placeholder="Создайте пароль"
          hint="Должно быть не менее 8 символов"
          className="mt-4"
        />
        <Input
          label="Повторите"
          placeholder="Повторите пароль"
          className="mt-4"
        />
        <div className="mt-5">
          <Button
            className="px-[18px] py-2.5 bg-orange text-white font-medium rounded-lg"
          >
            Регистрация
          </Button>
          <div className="flex gap-1.5 mt-6 justify-center">
            <span className="text-gray">У вас уже есть аккаунт?</span>
            <span className="text-orange">Войти</span>
          </div>
        </div>
      </div>
    </div>
  )
}
