export interface userDataTypes {
  firstName?: string
  id?: string
  lasName?: string
  picture?: string
  title?: string
}

export interface postDataTypes {
  id?: string
  image?: string
  likes?: number
  owner?: userDataTypes
  publishDate?: string
  tags?: string[]
  text?: string
}

export interface commentDataTypes {
  id?: string
  message?: string
  owner?: userDataTypes
  post?: string
  publishDate: string
}

export interface responseDataTypes {
  data?: dataResponseTypes
  limit?: number
  page?: number
  total?: number
  error?: string
}

export interface StoreState {
  tagSelected: string
  postDataResponse: responseDataTypes | undefined
  selectedComments: responseDataTypes | undefined
  selectedPost: postDataTypes | undefined
  isCommentsModalOpen: boolean
}

export type responseDataArrayTypes = userDataTypes[] | postDataTypes[] | commentDataTypes[];