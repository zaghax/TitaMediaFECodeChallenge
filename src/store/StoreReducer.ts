import { StoreState, responseDataTypes, postDataTypes } from '../types/types'

const initialStore: StoreState = {
  tagSelected: 'DOGS',
  postDataResponse: {},
  selectedComments: {},
  selectedPost: {},
  isCommentsModalOpen: false,
  isUserDetailsModalOpen: false,
  selectedUserDetails: {},
}

export type ActionsType =
  | { type: 'setPostList'; payload: responseDataTypes | undefined }
  | { type: 'setSelectedComments'; payload: responseDataTypes | undefined }
  | { type: 'setSelectedPost'; payload: postDataTypes | undefined }
  | { type: 'setIsCommentsModalOpen'; payload: boolean }
  | { type: 'setIsUserDetailsModalOpen'; payload: boolean }
  | { type: 'setSelectedUserDetails'; payload: responseDataTypes | undefined }

const storeReducer = (state: StoreState, action: ActionsType): StoreState => {
  switch (action.type) {
    case 'setPostList':
      return {
        ...state,
        postDataResponse: action.payload,
      }
    case 'setSelectedComments':
      return {
        ...state,
        selectedComments: action.payload,
      }
    case 'setSelectedPost':
      return {
        ...state,
        selectedPost: action.payload,
      }
    case 'setIsCommentsModalOpen':
      return {
        ...state,
        isCommentsModalOpen: action.payload,
      }
    case 'setIsUserDetailsModalOpen':
      return {
        ...state,
        isUserDetailsModalOpen: action.payload,
      }
    case 'setSelectedUserDetails':
      return {
        ...state,
        selectedUserDetails: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
