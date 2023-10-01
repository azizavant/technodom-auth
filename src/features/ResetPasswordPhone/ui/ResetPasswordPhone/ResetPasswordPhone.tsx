import React from 'react'
import cls from './ResetPasswordPhone.module.scss'
import Phone from '@/features/ResetPasswordPhone/icons/phone.svg'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { EmailIcon } from '@/shared/ui/SVGComponents/EmailIcon'
import { useNavigate } from '@tanstack/react-location'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/entities/store/store'
import { PhoneIcon } from '@/shared/ui/SVGComponents/PhoneIcon'

interface ResetPasswordPhoneProps {
  className?: string
}

export const ResetPasswordPhone: React.FC<ResetPasswordPhoneProps> = ({ className }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{phoneNumber: string}>({
    criteriaMode: 'all',
    defaultValues: {
      phoneNumber: ''
    }
  })

  const onSubmit = (data: { phoneNumber: string }) => {
    // setPhoneNumber(data.phone)
    // mutate(
    //   {
    //     phone: data.phone
    //   },
    //   {
    //     onSuccess: () => {
    //       toast.success('Вам отправлена ссылка, для восстановления')
    //     },
    //     onError: () => {
    //       toast.error('Что-то пошло не так, попробуйте позднее')
    //     }
    //   }
    // )
  }
  return (
    <div className={clsx(cls.ResetPasswordPhone, {}, [className])}>

      <div className="pt-8 px-8 flex justify-center">
        <h2 className="overflow-hidden text-[#F0C126] font-bold text-4xl xs:text-3xl">Восстановление пароля</h2>
      </div>

      <div className={cls.Content}>

        <div
          className="basis-1/2 lg:basis-1 w-full h-[960px] flex flex-col justify-center items-center p-3">

          <span>
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="56" height="56" rx="28" fill="#FFF1D2"/>
              <path
                d="M37.0827 27.7502L41.166 23.6668M43.4993 21.3335L41.166 23.6668L43.4993 21.3335ZM32.2877 32.5452C32.8901 33.1395 33.3689 33.8472 33.6967 34.6274C34.0245 35.4076 34.1947 36.245 34.1975 37.0912C34.2004 37.9375 34.0358 38.776 33.7132 39.5583C33.3907 40.3407 32.9166 41.0516 32.3182 41.65C31.7198 42.2484 31.0089 42.7225 30.2265 43.0451C29.4441 43.3676 28.6057 43.5322 27.7594 43.5294C26.9132 43.5265 26.0758 43.3563 25.2956 43.0285C24.5154 42.7008 23.8077 42.2219 23.2133 41.6195C22.0445 40.4093 21.3977 38.7884 21.4124 37.106C21.427 35.4236 22.1018 33.8142 23.2915 32.6245C24.4812 31.4348 26.0906 30.76 27.773 30.7453C29.4554 30.7307 31.0763 31.3775 32.2865 32.5463L32.2877 32.5452ZM32.2877 32.5452L37.0827 27.7502L32.2877 32.5452ZM37.0827 27.7502L40.5827 31.2502L44.666 27.1668L41.166 23.6668L37.0827 27.7502Z"
                stroke="#FFBA1F" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="5" y="5" width="56" height="56" rx="28" stroke="#FFF8E9" strokeWidth="10"/>
            </svg>
          </span>

          <div className="flex flex-col items-center w-[360px]">
            <h2 className="text-3xl sm:text-2xl font-semibold mb-3"> Забыли пароль?</h2>
            <p className="px-1 text-center font-light mb-5">
              Не беспокойтесь, мы отправим вам SMS с кодом на номер телефона.
            </p>
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
              <Button type="submit" className="w-full font-medium h-11 mb-7">
                Сбросить пароль
              </Button>
            </form>

            <p className="flex text-dark text-sm mb-3 font-medium justify-center">
              <button className="font-medium flex items-center gap-2"
                      onClick={ () => navigate({ to: '/authorization' }) }
              >
                Вернуться на страницу входа
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
