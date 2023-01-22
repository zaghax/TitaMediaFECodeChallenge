import { useContext, useEffect, useCallback } from 'react'
import { StoreContext } from '../../store/StoreContext'
import useHttp from './useHttp'

const useSetPostList = () => {
  const { dispatch } = useContext(StoreContext)
  const { response, isLoading, error, getData } = useHttp()

  const setPostList: (requestPath: string) => void = useCallback((requestPath) => {
    getData(requestPath)
  }, [])

  useEffect(() => {
    if (!isLoading && !error && response) {
      dispatch({ type: 'setPostList', payload: response })
    }
  }, [isLoading, error, response])

  return { setPostList }
}

export default useSetPostList
