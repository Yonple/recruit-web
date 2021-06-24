import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children?: React.ReactNode
}
export const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('modal-root')

  return ReactDOM.createPortal(children, el!)
}
