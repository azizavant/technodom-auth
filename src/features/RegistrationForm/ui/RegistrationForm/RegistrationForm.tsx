import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from '@tanstack/react-location'
import cls from './RegistrationForm.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button/Button'
import clsx from 'clsx'
import { EmailIcon } from '@/shared/ui/SVGComponents/EmailIcon'
import { UserType } from '@/shared/api/types'
import { PhoneIcon } from '@/shared/ui/SVGComponents/PhoneIcon'
import { PasswordIcon } from '@/shared/ui/SVGComponents/PasswordIcon'
import { UserIcon } from '@heroicons/react/20/solid'
import { getRouteAuthorization } from '@/app/providers/router/config/routerConfig'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStateType } from '@/entities/store/store'
import { AuthStateType, registerTC } from '@/entities/store/reducers/authReducer'
import { Spinner } from '@/shared/ui/Spinner'
import { Checkbox } from '@/shared/ui/Checkbox'
import { getFormattedPhoneNumber } from '@/shared/utils/utils'

export const RegistrationForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { phoneData: { phoneNumber }, isLoading } = useSelector<AppStateType, AuthStateType>(state => state.auth)
  const [showPassword, setShowPassword] = useState(false)
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<UserType>({
    defaultValues: {
      phoneNumber: '',
      password: '',
      name: '',
      email: ''
    }
  })

  useEffect(() => {
    if (phoneNumber) {
      setValue('phoneNumber', getFormattedPhoneNumber(phoneNumber))
    }
  }, [phoneNumber])

  const onSubmit = (data: UserType) => {
    dispatch(registerTC(data, navigate))
  }

  if (isLoading) return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Spinner/>
    </div>
  )

  return (
    <div className={ clsx(cls.RegistrationForm) }>
      <div className={ cls.Content }>
        <div className="flex flex-col items-center gap-2 xs:gap-1.5 mb-7">
          <h2 className="text-orange font-bold text-4xl xs:text-3xl">Регистрация</h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-[32px] xs:text-2xl not-italic font-semibold">Добро пожаловать</h2>
            <span className="text-gray flex justify-center">Пожалуйста, введите свои данные.</span>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-col items-center w-full">
            <Input
              error={ errors.phoneNumber?.message }
              { ...register('phoneNumber', {
                required: true,
                pattern: {
                  value: /^\+\d{1,3}\s?\(?\d{1,4}\)?[-.\s]?\d{1,3}[-.\s]?\d{1,2}[-.\s]?\d{1,2}$/,
                  message: 'Неверный формат телефона'
                }
              }) }
              icon={ <PhoneIcon/> }
              placeholder="+7 (708) 282 87 54"
              className="mb-4 w-full"
              type="text"
              label="Номер"
            />
            <Input
              error={ errors.name?.message }
              { ...register('name', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_-]{3,16}$/,
                  message: 'Неверный формат имени пользователя'
                }
              }) }
              label="Имя"
              type={ 'text' }
              icon={ <UserIcon className={ 'w-5 h-5 text-[#FFBA1F]' }/> }
              placeholder="Имя пользователя"
              className="mb-4 w-full"
            />
            <Input
              error={ errors.email?.message }
              { ...register('email', {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Неверный формат email'
                }
              }) }
              icon={ <EmailIcon/> }
              placeholder="Введите Email"
              type="email"
              className="mb-4 w-full"
              label="Email"
            />
            <Input
              error={ errors.password?.message }
              { ...register('password', {
                required: true,
                pattern: {
                  value: /^.{6,}$/,
                  message: 'Должно быть не меньше 6 символов!'
                }
              }) }
              label="Пароль"
              placeholder="Введите Пароль"
              type={ showPassword ? 'text' : 'password' }
              icon={ <PasswordIcon/> }
              className={ clsx('mt-2 w-full') }
              showPassword={ showPassword }
              setShowPassword={ () => setShowPassword(!showPassword) }
            />
            <div className="mt-5 w-full flex justify-start items-center gap-3">
              <Checkbox
                type="square"
                checked={ acceptPrivacyPolicy }
                onChange={ (val: boolean) => setAcceptPrivacyPolicy(val) }/>
              Принимаю
              <a
                className="text-start-gradient underline"
                href="https://mtour.kz/docs/user_rules.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Политику конфиденциальности
              </a>
            </div>
            <div className="mt-5 w-full">
              <Button
                disabled={ !acceptPrivacyPolicy || !!Object.keys(errors).length }
                type={ 'submit' }
                className="disabled:bg-orange/40 px-[18px] w-full py-2.5 bg-orange text-white font-medium rounded-lg"
              >
                Зарегистрироваться
              </Button>
            </div>
          </form>
          <div className="flex gap-1.5 mt-6 xs:mt-4 justify-center hover:cursor-pointer">
            <p className="text-gray xs:text-sm">У вас уже есть аккаунт?</p>
            <Link to={ getRouteAuthorization() }
                  className="text-gray xs:text-sm underline">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
