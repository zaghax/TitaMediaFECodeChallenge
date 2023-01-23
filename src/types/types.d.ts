export interface userDataTypes {
  firstName: string
  id: string
  lastName: string
  picture: string
  title: string
}

export interface responseDataArrayTypes {
  id: string
  image: string
  likes: number
  owner: userDataTypes
  publishDate: string
  tags: string[]
  text: string
}

export interface responseDataArrayTypes {
  id: string
  message: string
  owner: userDataTypes
  post: string
  publishDate: string
}

export interface responseDataTypes {
  data: responseDataArrayTypes[]
  limit: number
  page: number
  total: number
  error: string
}

export interface responseDataTypes {
  id: string
  title: string
  firstName: string
  lastName: string
  picture: string
  gender: string
  email: string
  dateOfBirth: string
  phone: string
  location: {
    street: string
    city: string
    state: string
    country: string
    timezone: string
  }
  registerDate: string
  updatedDate: string
}

export interface responseDataTypes {
  error: string
}

export interface userLoggedDataTypes {
  givenName: string
  picture: string
}
export interface StoreState {
  postDataResponse: responseDataTypes | null
  selectedComments: responseDataTypes | null | undefined
  selectedPost: responseDataArrayTypes | null
  isCommentsModalOpen: boolean
  isUserDetailsModalOpen: boolean
  selectedUserDetails: responseDataTypes | null
  loggedUserInfo: userLoggedDataTypes | null
}

