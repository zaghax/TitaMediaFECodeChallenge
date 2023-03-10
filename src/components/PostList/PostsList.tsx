import { useEffect, useState, useContext } from 'react'
import Post from '../Post/Post'
import { StoreContext } from '../../store/StoreContext'
import { PostContainer } from './PostList.styles'
import { responseDataArrayTypes } from '../../types/types'

const PostList = () => {
  const { store } = useContext(StoreContext)
  const { postDataResponse } = store
  const [postList, setPostList] = useState<responseDataArrayTypes[]>()

  useEffect(() => {
    if (postDataResponse) {
      setPostList(postDataResponse.data)
    }
  }, [postDataResponse])

  return (
    <PostContainer>
      {postList && postList.length > 0 ? (
        <>
          {postList.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </>
      ):(
        <h1>There are no posts!</h1>
      )}
    </PostContainer>
  )
}

export default PostList
