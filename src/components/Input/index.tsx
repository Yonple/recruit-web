import { useRef } from 'react'
import { useCallback } from 'react'
import { InputHTMLAttributes } from 'react'
import tw from 'twin.macro'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
}
export const Input = ({ icon, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickWrapper = useCallback(() => {
    inputRef.current?.focus()
  }, [])
  
  return (
    <InputWrapper className="group" onClick={onClickWrapper}>
      {icon && <i tw="pr-2 text-gray-400">{icon}</i>}
      <StyledInput {...props} ref={inputRef} />
    </InputWrapper>
  )
}

const InputWrapper = tw.figure`border p-4 rounded focus-within:shadow transition-all hover:border-blue-500 focus-within:border-blue-500 flex`
const StyledInput = tw.input`outline-none appearance-none group-focus:shadow flex-auto`
