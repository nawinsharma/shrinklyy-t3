import { createPortal } from 'react-dom'

import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return createPortal(
    <dialog
      className={`absolute left-0 top-0 flex h-screen w-screen animate-fade items-center justify-center bg-black/65 animate-normal animate-duration-200`}
      onClick={event => {
        event.stopPropagation()
        onClose()
      }}
    >
      {children}
    </dialog>,
    document.body,
  )
}

export default Modal
