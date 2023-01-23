import { StoreState, responseDataTypes, userLoggedDataTypes, responseDataArrayTypes } from '../types/types'

const initialStore: StoreState = {
  postDataResponse: null,
  selectedComments: null,
  selectedPost: null,
  isCommentsModalOpen: false,
  isUserDetailsModalOpen: false,
  selectedUserDetails: null,
  loggedUserInfo: null,
}

export type ActionsType =
  | { type: 'setPostList'; payload: responseDataTypes | null }
  | { type: 'setSelectedComments'; payload: responseDataTypes | null | undefined}
  | { type: 'setSelectedPost'; payload: responseDataArrayTypes | null }
  | { type: 'setIsCommentsModalOpen'; payload: boolean }
  | { type: 'setIsUserDetailsModalOpen'; payload: boolean }
  | { type: 'setSelectedUserDetails'; payload: responseDataTypes | null }
  | { type: 'setLoggedUserInfo'; payload: userLoggedDataTypes | null }

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
    case 'setLoggedUserInfo':
      return {
        ...state,
        loggedUserInfo: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
