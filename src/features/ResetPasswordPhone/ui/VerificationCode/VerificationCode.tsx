import React, { type RefObject, useEffect, useRef, useState } from 'react'
import {
  handleFocus,
  handleInput,
  handleKeyDown,
  handlePaste,
  resetCode
} from '@/features/ResetPasswordPhone/lib/VerificationCode/utils'

export const VerificationCode = () => {
  const [code, setCode] = useState<string>('')

  const inputRefs: Array<RefObject<HTMLInputElement>> = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  useEffect(() => {
    if (code.length === 4) {
      resetCode(inputRefs, setCode)
    }
  }, [code])

  return (
    <div className="flex gap-5 Twoxs:gap-3.5 justify-center">
      {[0, 1, 2, 3].map((index) => (
        <input
          className="text-[50px] rounded-lg text-orange font-medium p-2 w-20 Twoxs:w-full
          text-center border border-[#FFD988] focus:outline-0 focus:shadow-lg focus:border-2 hover:cursor-pointer"
          key={index}
          type="text"
          maxLength={1}
          onChange={(e) => { handleInput(e, index, inputRefs, code, setCode) }}
          ref={inputRefs[index]}
          autoFocus={index === 0}
          onFocus={handleFocus}
          onKeyDown={(e) => { handleKeyDown(e, index, inputRefs, setCode) }}
          onPaste={(e) => { handlePaste(e, inputRefs, setCode) }}
        />
      ))}
    </div>
  )
}
