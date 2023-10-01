import { type ChangeEvent, type ClipboardEvent, type Dispatch, type FocusEvent, type KeyboardEvent, type SetStateAction } from 'react'

export function handleInput (
  e: ChangeEvent<HTMLInputElement>,
  index: number,
  inputRefs,
  code: string,
  setCode: Dispatch<SetStateAction<string>>
) {
  const input = e.target
  const previousInput = inputRefs[index - 1]
  const nextInput = inputRefs[index + 1]

  const newCode = [...code]

  if (/^[a-z]+$/.test(input.value)) {
    const uc = input.value.toUpperCase()
    newCode[index] = uc
    inputRefs[index].current.value = uc
  } else {
    newCode[index] = input.value
  }

  setCode(newCode.join(''))

  if (input.value === '') {
    if (previousInput) {
      previousInput.current.focus()
    }
  } else if (nextInput) {
    nextInput.current.select()
  }
}

export const resetCode = (inputRefs, setCode: Dispatch<SetStateAction<string>>) => {
  inputRefs.forEach(ref => {
    ref.current.value = ''
  })
  inputRefs[0].current.focus()
  setCode('')
}

export const handlePaste = (
  e: ClipboardEvent<HTMLInputElement>,
  inputRefs,
  setCode: Dispatch<SetStateAction<string>>
) => {
  const pastedCode = e.clipboardData.getData('text')
  if (pastedCode.length === 4) {
    setCode(pastedCode)
    inputRefs.forEach((inputRef, index) => {
      inputRef.current.value = pastedCode.charAt(index)
    })
  }
}

export function handleKeyDown (
  e: KeyboardEvent<HTMLInputElement>,
  index: number,
  inputRefs,
  setCode: Dispatch<SetStateAction<string>>
) {
  const input = e.currentTarget
  const previousInput = inputRefs[index - 1]

  if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
    e.preventDefault()
    setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1))
    if (previousInput) {
      previousInput.current.focus()
    }
  }
}

export function handleFocus (e: FocusEvent<HTMLInputElement>) {
  e.target.select()
}
