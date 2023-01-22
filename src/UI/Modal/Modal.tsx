import ReactDOM from 'react-dom'
import { BackdropWrapper, ModalOverlayWrapper } from './Modal.styles'

interface ChildrenTypes {
  children?: React.ReactNode
  onClose?: () => void
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

const ModalOverlay = ({ children }: ChildrenTypes) => {
  return <ModalOverlayWrapper>{children}</ModalOverlayWrapper>
}

const rootOverlay = document.getElementById('overlay-root') as HTMLElement

const Modal = ({ children, onClose }: ChildrenTypes) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, rootOverlay)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, rootOverlay)}
    </>
  )
}

export default Modal
