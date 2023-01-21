import { StoreState, responseDataTypes } from '../types/types'

const initialStore: StoreState = {
  tagSelected: 'DOGS',
  postDataResponse: {},
}

export type ActionsType = { type: 'setPostList'; payload: responseDataTypes | undefined }

const storeReducer = (state: StoreState, action: ActionsType): StoreState => {
  switch (action.type) {
    case 'setPostList':
      return {
        ...state,
        postDataResponse: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
