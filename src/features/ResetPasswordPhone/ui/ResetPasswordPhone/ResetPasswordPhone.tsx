import React from 'react'
import cls from './ResetPasswordPhone.module.scss'
import { classNames } from '@/shared/lib'
import { Container } from '@/shared/ui/Container'
import Phone from '@/features/ResetPasswordPhone/icons/phone.svg'
import { VerificationCode } from '@/features/ResetPasswordPhone/ui/VerificationCode/VerificationCode'

interface ResetPasswordPhoneProps {
  className?: string
}

export const ResetPasswordPhone: React.FC<ResetPasswordPhoneProps> = ({ className }) => {
  return (
    <div className={classNames(cls.ResetPasswordPhone, {}, [className])}>

      <Container className="pt-8 px-8 md:hidden">
        <h2 className="overflow-hidden text-[#F0C126] font-bold text-4xl xs:text-3xl">MTour</h2>
      </Container>

      <Container className={cls.Content}>

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

        <div className="mt-5">
          <VerificationCode/>
        </div>

      </Container>

      <Container className="px-8 pt-8 lg:pt-4 xs:pt-6 pb-3 flex justify-between md:hidden">
        <span>© MTour 2023</span>
        <span>support@mtour.kz</span>
      </Container>

    </div>
  )
}
