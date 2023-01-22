import { useContext, useEffect } from 'react'
import { StoreContext } from '../../store/StoreContext'
import useHttp from '../../utils/hooks/useHttp'
import { HeaderWrapper } from './PostHeader.styles'
import { userDataTypes } from '../../types/types'

interface propTypes {
  headerData: userDataTypes | undefined
}

const PostHeader = ({ headerData }: propTypes) => {
  const { dispatch } = useContext(StoreContext)
  const { response, isLoading, error, getData } = useHttp()
  const userPath = `user/${headerData?.id}`

  const setUserData = () => {
    getData(userPath)
  }

  useEffect(() => {
    if (!isLoading && !error && response) {
      dispatch({ type: 'setSelectedUserDetails', payload: response })
      dispatch({ type: 'setIsUserDetailsModalOpen', payload: true })
    }
  }, [isLoading, error, response])

  return (
    <HeaderWrapper>
      <img src={headerData?.picture} alt={headerData?.firstName} onClick={setUserData} />
      <p onClick={setUserData}>
        {headerData?.firstName} {headerData?.lastName}
      </p>
    </HeaderWrapper>
  )
}

export default PostHeader
