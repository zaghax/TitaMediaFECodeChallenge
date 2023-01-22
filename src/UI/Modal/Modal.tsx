import ReactDOM from 'react-dom'
import { BackdropWrapper, ModalOverlayWrapper } from './Modal.styles'

interface ChildrenTypes {
  children?: React.ReactNode
  onClose?: () => void
  size?: string
}

interface BackdropPropTypes {
  onClose?: () => void
}

const Backdrop = ({ onClose }: BackdropPropTypes) => {
  return (
    <BackdropWrapper onClick={onClose}>
      <button type='button' onClick={onClose}>
        Close
      </button>
    </BackdropWrapper>
  )
}

const ModalOverlay = ({ children, size }: ChildrenTypes) => {
  return <ModalOverlayWrapper size={size}>{children}</ModalOverlayWrapper>
}

const rootOverlay = document.getElementById('overlay-root') as HTMLElement

const Modal = ({ children, onClose, size }: ChildrenTypes) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, rootOverlay)}
      {ReactDOM.createPortal(<ModalOverlay size={size}>{children}</ModalOverlay>, rootOverlay)}
    </>
  )
}

export default Modal
