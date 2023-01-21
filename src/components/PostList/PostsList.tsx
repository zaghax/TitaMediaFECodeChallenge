import { useEffect, useState, useContext } from 'react'
import Post from '../Post/Post'
import { StoreContext } from '../../store/StoreContext'
import { PostContainer } from './PostList.styles'
import { responseDataArrayTypes } from '../../types/types'

const PostList = () => {
  const { store } = useContext(StoreContext)
  const { postDataResponse } = store
  const [postList, setPostList] = useState<responseDataArrayTypes>()

  useEffect(() => {
    if (postDataResponse) {
      setPostList(postDataResponse?.data)
    }
  }, [postDataResponse])

  return (
    <PostContainer>
      {postList && (
        <>
          {postList.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </>
      )}
    </PostContainer>
  )
}

export default PostList
