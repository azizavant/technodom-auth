import React, { ReactNode, useRef } from 'react'
import clsx from 'clsx'
import { CheckboxSquare } from '@/shared/ui/Checkbox'
import { DataType } from '@/shared/ui/Accordion/CustomAccordion'
import ExclamationMark from '@/shared/assets/icons/QuestionMark.svg'
import { Input } from '@/shared/ui/Input'
import QuestionMark from '@/shared/assets/icons/QuestionMark.svg'
import { Button } from '@/shared/ui/Button/Button'
import ShareIcon from '@/shared/assets/icons/ShareIcon.svg'

interface AccordionItemProps {
    handleToggle: (id: string) => void
    active: string
    dataItem: DataType
    children: ReactNode
}

export const AccordionItem = ({handleToggle, active, dataItem, children}: AccordionItemProps) => {
    const contentEl = useRef<HTMLDivElement | null>(null)

    const { header, id, text, content } = dataItem

    return (
        <div className='rounded-2xl'>
            <div
                className={clsx(active === id ? 'rounded-t-2xl bg-[#E4E7EC] flex items-start h-full cursor-pointer text-gray-700 pl-5 pr-2.5 py-0 ' : 'flex items-start')}
                onClick={() => handleToggle(id)}
            >
                <span className={ clsx(active === id ? 'py-3 !text-gray-700 !no-underline' : '', 'font-medium text-sm text-blue underline min-w-[320px]') }>{header}</span>
                <span className={clsx(active === id ? 'py-3' : '', 'text-gray-700 font-medium text-sm')}>
                    {text}
                </span>
            </div>

            <div
                ref={contentEl}
                className={clsx(active === id ? 'h-full bg-[#E4E7EC] rounded-b-2xl' : '', 'relative h-0 overflow-hidden transition-[height] duration-[0.1s] ease-[ease]')}
                style={
                    active === id
                        ? { height: contentEl?.current?.scrollHeight! }
                        : { height: '0px' }
                }
            >
                <div className='leading-[1.7] text-sm pt-0 px-5'>
                    <div className='flex text-sm flex-wrap mb-3 mx-auto container w-full'>
                        {children}
                    </div>
                    <hr className="text-lightgray"/>
                    <div className="w-full flex justify-start my-3 gap-3">
                        <Button className="bg-white flex items-center h-[40px] !text-gray-700 text-sm border-solid border border-[#D0D5DD] !px-6">
                               Отмена
                        </Button>
                        <Button className="bg-blue h-[40px] text-white text-sm !px-7">
                            Готово
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}