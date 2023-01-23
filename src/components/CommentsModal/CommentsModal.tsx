import Modal from '../../UI/Modal/Modal'
import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import Comment from './Comment'
import {
  CommentsModalWrapper,
  ModalWrapperLeft,
  ModalWrapperRight,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from './CommentsModal.styles'
import { responseDataArrayTypes } from '../../types/types'

const CommentsModal = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { selectedPost, selectedComments } = store

  const closeModalHandler = () => {
    dispatch({ type: 'setSelectedComments', payload: null })
    dispatch({ type: 'setSelectedPost', payload: null })
    dispatch({ type: 'setIsCommentsModalOpen', payload: false })
  }

  return (
    <Modal onClose={closeModalHandler}>
      {selectedPost && (
        <CommentsModalWrapper>
          <ModalWrapperLeft>
            <img src={selectedPost.image} alt={selectedPost.text} />
          </ModalWrapperLeft>
          <ModalWrapperRight>
            <ModalHeader>
              <img src={selectedPost.owner.picture} alt={selectedPost.owner.firstName} />
              <p>
                {selectedPost.owner.firstName} {selectedPost.owner.lastName}
              </p>
            </ModalHeader>
            <hr role='separator' />
            <ModalContent>
              {selectedComments && (
                <ul>
                  {selectedComments.data.map((comment: responseDataArrayTypes) => (
                    <Comment key={comment.id} commentData={comment} />
                  ))}
                </ul>
              )}
            </ModalContent>
            <hr role='separator' />
            <ModalFooter>
              <p>
                <strong>{selectedPost.likes} Likes</strong>
              </p>
            </ModalFooter>
          </ModalWrapperRight>
        </CommentsModalWrapper>
      )}
    </Modal>
  )
}

export default CommentsModal
