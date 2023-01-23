import { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import Tag from '../Tag/Tag'
import PostHeader from './PostHeader'
import useHttp from '../../utils/hooks/useHttp'
import { responseDataArrayTypes, responseDataTypes } from '../../types/types'
import { PostWrapper, PostImage, PostFooter, PostComments } from './Post.styles'

interface propTypes {
  data: responseDataArrayTypes
}

const Posts = ({ data }: propTypes) => {
  const { response, isLoading, error, getData } = useHttp()
  const [postComments, setPostComments] = useState<responseDataTypes | null>()
  const [postLength, setPostLength] = useState<number>(0)
  const { dispatch } = useContext(StoreContext)
  const commentsPath = `user/${data.owner.id}/comment`

  const setSelectedComments = () => {
    dispatch({ type: 'setSelectedComments', payload: postComments })
    dispatch({ type: 'setSelectedPost', payload: data })
    dispatch({ type: 'setIsCommentsModalOpen', payload: true })
  }

  useEffect(() => {
    getData(commentsPath)
  }, [])

  useEffect(() => {
    if (!isLoading && !error && response) {
      setPostLength(response.data.length)
      setPostComments(response)
    }
  }, [isLoading, error, response])

  return (
    <PostWrapper>
      <PostHeader headerData={data?.owner} />
      <PostImage>
        <img src={data.image} alt={data.text} />
      </PostImage>
      <PostFooter>
        <p>
          <strong>{data.likes} Likes</strong>
        </p>
        <p>
          <strong>{data.owner?.firstName}</strong> {data.text}
        </p>
        <p className='tags'>
          {data.tags?.map((tag) => (
            <Tag key={tag} data={tag} />
          ))}
        </p>
        <PostComments onClick={setSelectedComments}>Look {postLength} comments</PostComments>
      </PostFooter>
      <hr role='separator' />
    </PostWrapper>
  )
}

export default Posts
