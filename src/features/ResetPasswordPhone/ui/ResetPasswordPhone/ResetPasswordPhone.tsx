import React from 'react'
import cls from './ResetPasswordPhone.module.scss'
import Phone from '@/features/ResetPasswordPhone/icons/phone.svg'
import clsx from 'clsx'

interface ResetPasswordPhoneProps {
  className?: string
}

export const ResetPasswordPhone: React.FC<ResetPasswordPhoneProps> = ({ className }) => {
  return (
    <div className={clsx(cls.ResetPasswordPhone, {}, [className])}>

      <div className="pt-8 px-8 md:hidden">
        <h2 className="overflow-hidden text-[#F0C126] font-bold text-4xl xs:text-3xl">Восстановление пароля</h2>
      </div>

      <div className={cls.Content}>

        <div className="flex flex-col items-center gap-3.5 xl:px-5 md:mt-14">
          <Phone/>
          <div className="flex flex-col gap-3.5 text-center">
            <h2 className="text-[32px] xs:text-xl lg:text-2xl not-italic font-semibold leading-tight">
              Код подтверждения отправлен
            </h2>
            <div className="text-gray xs:text-lg">
              Мы отправили SMS с кодом подтверждения на номер <br className="hidden xs:block"/> +7 (777) 000 07-70
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
