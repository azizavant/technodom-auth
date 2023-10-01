import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef, useEffect, useState } from 'react'

interface Props extends ComponentPropsWithoutRef<'textarea'> {
  label?: string
  error?: string
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, ...rest }: Props, ref) => {

    const [limitError, setLimitError] = useState('')
    const { value } = rest
    const limit = 1000 - (value as string).length

    useEffect(() => {
      if (limit < 0) {
        setLimitError('Вы превысили допустимое количество символов')
      }
      if (limit > -1) {
        setLimitError('')
      }
    }, [value])

    return (
      <div className={ className }>
        <label className="w-full h-full font-medium text-dark-blue block">
          { label && <span className="mb-1 inline-block">{ label }</span> }
          <textarea
            ref={ ref }
            className={ clsx(error || limitError && 'border-[#FDA29B] shadow-[0_0_0_4px_rgba(0,0,0,0.3)] shadow-[#FEF3F2] focus:border-[#FDA29B] focus:shadow-[#FEF3F2]',
              'overflow-auto block w-full h-full rounded-lg border border-[#D0D5DD] outline-none px-4 py-3 text-dark font-medium resize-none focus:border-[#a4bcfd] focus:shadow-[0_0_0_4px_rgba(0,0,0,0.3)] focus:shadow-[#eef4ff]') }
            { ...rest }
          />
          <div className="flex flex-row mt-2 ml-1">
            {
              value && !limitError && (
                <span className="mb-1 inline-block text-sm font-normal text-gray-500">
							Осталось символов: { limit }
						</span>
              )
            }
            {
              limitError && (
                <span className="flex gap-2 text-error-600 rounded-lg font-normal text-sm">
              Вы превысили лимит: <p>
              { Math.abs(limit) }
            </p>
            </span>
              )
            }
          </div>
        </label>
        { error && <span className="text-red font-medium text-sm mt-0.5">{ error }</span> }
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
