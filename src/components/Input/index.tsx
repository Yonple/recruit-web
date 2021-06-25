import { useRef } from 'react'
import { useCallback } from 'react'
import { InputHTMLAttributes } from 'react'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  loading?: boolean
}
export const Input = ({ icon, loading, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickWrapper = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <InputWrapper className="group" onClick={onClickWrapper}>
      {icon && <i tw="mr-2 text-gray-400">{icon}</i>}
      <StyledInput {...props} ref={inputRef} />
      {loading && (
        <i tw="animate-spin text-gray-400 ml-2">
          <FontAwesomeIcon icon={faSpinner} />
        </i>
      )}
    </InputWrapper>
  )
}

const InputWrapper = tw.figure`border p-4 rounded focus-within:shadow transition-all hover:border-blue-500 focus-within:border-blue-500 flex`
const StyledInput = tw.input`outline-none appearance-none group-focus:shadow flex-auto`
