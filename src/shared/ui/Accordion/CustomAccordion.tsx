import { ReactNode, useState } from 'react'
import { AccordionItem } from './AccordionItem'

export interface DataType {
    header: string
    id: string
    text: string
    content: ContentType[]
}

export interface ContentType {
    id: string,
    value: string
    checked: boolean
}

interface AccordionProps {
    data: DataType[]
    children: ReactNode
}

export const CustomAccordion = ({data, children}: AccordionProps) => {
    const [active, setActive] = useState('')

    const handleToggle = (id: string) => {
        if (active === id) {
            setActive('')
        } else {
            setActive(id)
        }
    }

    return (
        <article className='w-full rounded-3xl bg-white'>
            {data.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        dataItem={item}
                    >
                        {children}
                    </AccordionItem>
                )
            })}
        </article>
    )
}