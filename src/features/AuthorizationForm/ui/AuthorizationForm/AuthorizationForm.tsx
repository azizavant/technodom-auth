import React, { useState } from 'react'
import cls from './AuthorizationForm.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button/Button'
import { Link, useNavigate } from '@tanstack/react-location'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStateType } from '@/entities/store/store'
import { AuthStateType, checkPhoneNumberTC, loginTC } from '@/entities/store/reducers/authReducer'
import { UserLogging } from '@/shared/api/types'
import { PasswordIcon } from '@/shared/ui/SVGComponents/PasswordIcon'
import { getRouteRegistration, getRouteResetPassword } from '@/app/providers/router/config/routerConfig'
import { Spinner } from '@/shared/ui/Spinner'
import { PhoneIcon } from '@/shared/ui/SVGComponents/PhoneIcon'
import { getFormattedPhoneNumber } from '@/shared/utils/utils'

interface AuthorizationFormProps {
  className?: string
}

export const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ className }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { phoneData: { hasAccount }, isLoading } = useSelector<AppStateType, AuthStateType>(state => state.auth)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<UserLogging>>({
    criteriaMode: 'all'
  })

  const onSubmit = (data: Partial<UserLogging> ) => {
    if (hasAccount) {
      dispatch(loginTC(data as UserLogging, navigate))
      return
    }
    if (data.phoneNumber) {
      dispatch(checkPhoneNumberTC(getFormattedPhoneNumber(data.phoneNumber), navigate))
    }
  }


  if (isLoading) return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Spinner/>
    </div>
  )

  return (
    <div className={clsx(cls.AuthorizationForm, className)}>
      <div className={cls.Content}>
        <div className="flex flex-col items-center gap-2 xs:gap-1.5 mb-7">
          <h2 className="text-orange font-bold text-4xl xs:text-3xl">Авторизация</h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-[32px] xs:text-2xl not-italic font-semibold">Добро пожаловать</h2>
            <span className="text-gray flex justify-center">Пожалуйста, введите свои номер телефона.</span>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-col items-center w-full">
            <Input
              error={ errors.phoneNumber?.message }
              { ...register('phoneNumber', {
                required: 'Заполните поле',
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
            {
              hasAccount ? (
                <>
                  <Input
                    error={ errors.password?.message }
                    {...register('password', {
                      required: 'Заполните поле',
                      pattern: {
                        value: /^.{6,}$/,
                        message: 'Должно быть не меньше 6 символов!'
                      }
                    })}
                    label="Пароль"
                    placeholder="Введите Пароль"
                    type={showPassword ? 'text' : 'password'}
                    icon={<PasswordIcon/>}
                    className={ clsx('mt-2 w-full') }
                    showPassword={showPassword}
                    setShowPassword={() => setShowPassword(!showPassword)}
                  />
                  <div className="flex ml-8 w-full gap-4 mt-2 xs:mt-4 justify-start hover:cursor-pointer">
                    <p className='text-gray text-sm xs:text-xs'>Забыли пароль?</p>
                    <Link to={getRouteResetPassword()}
                          className="text-gray text-sm xs:text-xs underline">
                      Восстановить
                    </Link>
                  </div>
                </>
              ) : null
            }
            <Button
              disabled={!!Object.keys(errors).length}
              type={ 'submit' }
              className="disabled:bg-orange/40 px-[18px] py-2.5 mt-5 bg-orange text-white font-medium rounded-lg w-full"
            >
              Войти
            </Button>
          </form>

          <div className="flex gap-3 mt-6 xs:mt-4 justify-center hover:cursor-pointer">
            <p className='text-gray xs:text-sm'>У вас нет аккаунта?</p>
            <Link to={getRouteRegistration()}
                  className="text-gray xs:text-sm underline">
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


