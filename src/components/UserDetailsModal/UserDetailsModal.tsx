import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../store/StoreContext'
import Modal from '../../UI/Modal/Modal'
import { UserModalWrapper, ModalHeader, ModalContent } from './UserDetailsModal.styles'

const UserDetailsModal = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { selectedUserDetails } = store
  const [age, setAge] = useState<number>(0);

  const closeModalHandler = () => {
    dispatch({ type: 'setSelectedUserDetails', payload: {} })
    dispatch({ type: 'setIsUserDetailsModalOpen', payload: false })
  }

  const getAge = () => {
    const now = new Date();
    const dateOfBirth = selectedUserDetails?.dateOfBirth !== undefined ? selectedUserDetails?.dateOfBirth : '';
    const formatedDOB = new Date(dateOfBirth)
    const resultTime = now.getTime() - formatedDOB.getTime();
    const age = Math.round(resultTime / 31536000000)
    setAge(age)
  }

  useEffect(()=>{
    getAge()
  },[])
 

  return (
    <Modal onClose={closeModalHandler} size="small">
      {selectedUserDetails && (
        <UserModalWrapper>
          <ModalHeader>
            <img src={selectedUserDetails.picture} alt={selectedUserDetails.firstName} />
            <h1>
              {selectedUserDetails.firstName} {selectedUserDetails.lastName}
            </h1>
          </ModalHeader>
          <ModalContent>
            <p>
              <strong>Age:</strong> {age} years old
            </p>
            <p>
              <strong>Gender:</strong> {selectedUserDetails.gender}
            </p>
            <p>
              <strong>Email:</strong> {selectedUserDetails.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUserDetails.phone}
            </p>
            <p>
              <strong>Country:</strong> {selectedUserDetails.location?.country}
            </p>
          </ModalContent>
        </UserModalWrapper>
      )}
    </Modal>
  )
}

export default UserDetailsModal
