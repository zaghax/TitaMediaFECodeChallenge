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
import { commentDataTypes } from '../../types/types'

const CommentsModal = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { selectedPost, selectedComments } = store

  const closeModalHandler = () => {
    dispatch({ type: 'setSelectedComments', payload: {} })
    dispatch({ type: 'setSelectedPost', payload: {} })
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
              <img src={selectedPost.owner?.picture} alt={selectedPost.owner?.firstName} />
              <p>
                {selectedPost.owner?.firstName} {selectedPost.owner?.lasName}
              </p>
            </ModalHeader>
            <hr role='separator' />
            <ModalContent>
              <ul>
                {selectedComments?.data.map((comment: commentDataTypes) => (
                  <Comment key={comment.id} commentData={comment}/>
                ))}
              </ul>
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
