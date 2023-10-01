import React from 'react'
import clsx from 'clsx'

interface CheckboxProps {
  type: 'square' | 'round'
  checked: boolean
  onChange: (state: boolean) => void
  className?: string
  checkBoxClassName?: string
}

export const Checkbox = ({ checked, onChange, type, className, checkBoxClassName}: CheckboxProps) => {
  const isRound = type === 'round'
  return (
    <label className={className}>
      <input
        className="hidden"
        type="checkbox"
        onChange={() => {
          onChange(!checked)
        }}
      />
      <div
        className={clsx('w-4 h-4 rounded border-[1.4px] flex items-center justify-center',
          checkBoxClassName,
          isRound && '!rounded-full',
          checked
            ? 'bg-[#FFFAEF] border-[#FFBA1F]'
            : 'border-[#D0D5DD]')}>
        { checked
          ? !isRound ? (
            <svg width={ isRound ? '10' : '12' }
                 height={ isRound ? '7' : '9' } viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6673 1.5L4.25065 7.91667L1.33398 5"
                    stroke={ '#FFBA1F' }
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          ) : <span className='w-[45%] h-[45%] bg-[#FFBA1F] rounded-full'/>
          : null
        }
      </div>
    </label>
  )
}