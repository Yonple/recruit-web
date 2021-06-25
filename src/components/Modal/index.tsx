import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalPortal } from '../ModalPortal'

interface Props {
  visible: boolean
  children?: React.ReactNode
  onClose?: () => void
}
export const Modal = ({ visible, children, onClose }: Props) => {
  return (
    <ModalPortal>
      <Overlay visible={visible} onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <span onClick={onClose} tw="p-2 cursor-pointer">
              <FontAwesomeIcon icon={faTimes} tw="text-3xl text-gray-400" />
            </span>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </Overlay>
    </ModalPortal>
  )
}

const ModalWrapper = styled.article`
  ${tw`border shadow bg-white rounded-lg`}

  max-width:100%;
`

const ModalHeader = styled.header`
  ${tw`p-5 text-right border-b`}
`
const ModalContent = styled.div`
  ${tw`p-5`}
  width: 500px;
  max-width: 100%;
  min-height: 300px;
`

const Overlay = styled.section<{ visible?: boolean }>`
  ${tw`fixed inset-0 bg-gray-800 bg-opacity-40 flex justify-center items-center`}

  @keyframes blowUpModal {
    0% {
      opacity: 0.3;
      transform: scale(0.3);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  transform: scale(0);

  ${(props) => props.visible && `transform: scale(1);`}

  ${(props) =>
    props.visible &&
    `${ModalWrapper} {
      animation: blowUpModal 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }`}
`
