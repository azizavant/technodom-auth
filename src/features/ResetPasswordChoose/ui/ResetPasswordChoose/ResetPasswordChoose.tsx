import React from 'react'
import cls from './ResetPasswordChoose.module.scss'
import { classNames } from '@/shared/lib'
import { Container } from '@/shared/ui/Container'
import Key from '@/features/ResetPasswordChoose/icons/key.svg'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Button } from '@/shared/ui/Button/Button'

interface ResetPasswordChooseProps {
  className?: string
}

export const ResetPasswordChoose: React.FC<ResetPasswordChooseProps> = ({ className }) => {
  return (
    <div className={classNames(cls.ResetPasswordChoose)}>

      <Container className="pt-8 px-8 md:hidden">
        <h2 className="overflow-hidden text-[#F0C126] font-bold text-4xl xs:text-3xl">MTour</h2>
      </Container>

      <Container className={cls.Content}>

        <div className="flex flex-col items-center gap-4 xs:gap-3.5 xl:px-5 md:mt-14">
          <Key/>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[32px] xs:text-xl lg:text-2xl not-italic font-semibold">
              Выберите способ сброса пароля
            </h2>
            <div className="text-gray xs:text-sm">
              Выберите ниже один из вариантов сброса пароля для jevdet078@gmail.com
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 xl:px-5">

          <div className="flex gap-3 items-start">
            <div className="pt-1">
              <Checkbox isActive={false} onChange={() => { console.log() }}/>
            </div>
            <div>
              <p className="font-medium xs:text-sm">Получить сообщение через e-mail</p>
              <span className="text-gray xs:text-sm">
                Инструкции будут отправлены на адрес электронной почты, <br/> который заканчивается на j......com
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="pt-1">
              <Checkbox isActive={false} onChange={() => { console.log() }}/>
            </div>
            <div>
              <p className="font-medium xs:text-sm">Получить СМС-код на номер</p>
              <span className="text-gray xs:text-sm">
                Вам на номер телефона +7.......77 поступит СМС с кодом
              </span>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center gap-5">
          <Button
            className="w-[450px] lg:w-[350px] xs:w-[300px] text-center py-2.5 bg-orange text-white font-medium rounded-lg"
          >
            Сбросить пароль
          </Button>
          <div className="flex items-center gap-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="#667085" className="h-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
            </svg>
            <span className="text-gray">Вернуться на страницу входа</span>
          </div>
        </div>

      </Container>

      <Container className="px-8 pt-8 lg:pt-4 xs:pt-6 pb-3 flex justify-between md:hidden">

        <span>© MTour 2023</span>
        <span>support@mtour.kz</span>

      </Container>
    </div>
  )
}
