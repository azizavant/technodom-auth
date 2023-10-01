import React from 'react'
import { useForm } from 'react-hook-form'
import { useUserStore } from '@/entities/user-session'
import { useNavigate } from '@tanstack/react-location'
import { type schemas } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/features/RegistrationForm/model/api/registration'
import { classNames } from '@/shared/lib'
import cls from './RegistrationForm.module.scss'
import { Container } from '@/shared/ui/Container'
import { Input } from '@/shared/ui/Input'
import { socialIcons } from '@/shared/static/authorization'
import { Button } from '@/shared/ui/Button/Button'

export const RegistrationForm = () => {

  const {
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<schemas['RegisterOrgRequest']>()

  const { addUser } = useUserStore()
  const navigate = useNavigate()

  const { mutate: registration } = useMutation(register)

  return (
    <div className={classNames(cls.RegistrationForm)}>
      <Container className="pt-8 px-8 xs:pt-6 xs:px-4">
        <h2 className="overflow-hidden text-[#F0C126] font-bold text-4xl xs:text-3xl">MTour</h2>
      </Container>
      <Container className={cls.Content}>
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
          <div className="flex items-center gap-2.5 mt-4">
            <span className="flex grow border border-[#E4E7EC]"></span>
            <span className="text-gray">Быстрый вход через:</span>
            <span className="flex grow border border-[#E4E7EC]"></span>
          </div>
          <div className="flex justify-between mt-4 gap-4">
            {socialIcons.map(s =>
              <div key={s.id}
                className="p-2.5 border border-[#D0D5DD] w-full flex justify-center rounded-lg"
              >
                <img src={s.icon} alt={s.alt}/>
              </div>
            )}
          </div>
          <div className="flex gap-1.5 mt-6 justify-center">
            <span className="text-gray">У вас уже есть аккаунт?</span>
            <span className="text-orange">Войти</span>
          </div>
        </div>
      </Container>
      <Container className="px-8 pt-8 xs:pt-6 pb-6 flex justify-between">
        <span>© MTour 2023</span>
        <span>support@mtour.kz</span>
      </Container>
    </div>
  )
}
