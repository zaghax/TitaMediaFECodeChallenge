import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import Modal from '../../UI/Modal/Modal'
import {
  UserModalWrapper,
  ModalWrapperLeft,
  ModalWrapperRight
} from './UserDetailsModal.styles'

const UserDetailsModal = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { selectedUserDetails } = store

  const closeModalHandler = () => {
    dispatch({ type: 'setSelectedUserDetails', payload: {} })
    dispatch({ type: 'setIsUserDetailsModalOpen', payload: false })
  }

 /*  const getAge = (date:string | undefined) => {
    const now = new Date();
    const dateOfBirth = new Date(date)

    const result = now.getTime() - dateOfBirth.getTime();
    const age = Math.round(result / 31536000000)
    return age
  }
 */
  

  return (
    <Modal onClose={closeModalHandler}>
      {selectedUserDetails && (
        <UserModalWrapper>
          <ModalWrapperLeft>
            <img src={selectedUserDetails.picture} alt={selectedUserDetails.firstName} />
          </ModalWrapperLeft>
          <ModalWrapperRight>
            <h1>{selectedUserDetails.firstName} {selectedUserDetails.lastName}</h1>
            <hr role='separator' />
            <p><strong>Age:</strong> {selectedUserDetails.dateOfBirth}</p>
            <p><strong>Gender:</strong> {selectedUserDetails.gender}</p>
            <p><strong>Email:</strong> {selectedUserDetails.email}</p>
            <p><strong>Phone:</strong> {selectedUserDetails.phone}</p>
            <p><strong>Country:</strong> {selectedUserDetails.location?.country}</p>
          </ModalWrapperRight>
        </UserModalWrapper>
      )}
    </Modal>
  )
}

export default UserDetailsModal
