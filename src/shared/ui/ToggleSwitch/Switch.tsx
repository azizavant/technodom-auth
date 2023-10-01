import { Switch } from '@headlessui/react'
import clsx from 'clsx'

interface ToggleSwitchProps {
  id: string
  checked: boolean
  disabled?: boolean
  onChangeHandler: (state: boolean) => void
  label?: string
  height: number
  width: number
}

export const MySwitch = ({ id, checked, disabled, onChangeHandler, height, width, label }: ToggleSwitchProps) => {

  return (
    <Switch.Group>
      <div className="flex items-center justify-center">
        {
          label &&
            <Switch.Label className="mr-4">{ label }</Switch.Label>
        }
        <Switch
          checked={checked}
          onChange={onChangeHandler}
          style={{height: height + 'px', width: width + 'px'}}
          className={`${checked ? 'bg-royalGreen' : 'bg-[#f2f4f7]'}
              relative flex items-center shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            style={{height: (height - 4) + 'px', width: (height - 4) + 'px', transform: checked ? 'translateX(118%)' : 'translateX(0)'}}
            className={clsx(
                'pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out')}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}