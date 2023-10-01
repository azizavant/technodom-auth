import {ComponentPropsWithoutRef} from 'react'
import clsx from 'clsx'

interface ToggleSwitchProps extends ComponentPropsWithoutRef<'input'> {
  id: string
  checked: boolean
  disabled?: boolean
  width: number
  height: number
  onChangeHandler: (state: boolean) => void
}

export const ToggleSwitch = ({id, checked, disabled, onChangeHandler, width, height, ...rest}: ToggleSwitchProps) => {

  return (
    <div className='flex justify-center items-center'>
      <input
        {...rest}
        className="h-0 w-0 invisible peer"
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => {
          onChangeHandler(!checked)
        }}
      />
      <label
        style={{WebkitTapHighlightColor: 'transparent', width: width + 'px', height: height + 'px'}}
        className={clsx(`peer-checked:[&:active>span]:w-[${(width * 55) / 100}px] peer-disabled:[&:active>span]:w-[${(width * 55) / 100}px]`,
        `peer-checked:bg-royalblue peer-checked:[&>span]:left-[calc(100%_-_2px)] peer-checked:[&>span]:-translate-x-full 
        peer-disabled:opacity-50 flex items-center justify-between bg-[grey] cursor-pointer relative transition-[background-color] 
        duration-[0.2s] rounded-full`)}
        htmlFor={id}
      >
        <span style={{width: '40%', height: '78%'}}
              className={`content-[''] absolute bg-white transition-[0.2s] 
              shadow-[0_0_2px_0_rgba(10,10,10,0.29)] rounded-full left-0.5 top-0.5`}/>
      </label>
    </div>
  )
}