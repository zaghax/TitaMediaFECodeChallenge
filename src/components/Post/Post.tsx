import { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import Tag from '../Tag/Tag'
import useHttp from '../../utils/hooks/useHttp'
import { postDataTypes, responseDataTypes } from '../../types/types'
import { PostWrapper, PostImage, PostHeader, PostFooter, PostComments } from './Post.styles'

interface propTypes {
  data: postDataTypes
}

const Posts = ({ data }: propTypes) => {
  const { response, isLoading, error, getData } = useHttp()
  const [postComments, setPostComments] = useState<responseDataTypes>()
  const [postLength, setPostLength] = useState<number>(0)
  const { dispatch } = useContext(StoreContext)
  const path = `user/${data.owner?.id}/comment`

  const setSelectedComments = () => {
    dispatch({ type: 'setSelectedComments', payload: postComments })
    dispatch({ type: 'setSelectedPost', payload: data })
    dispatch({ type: 'setIsCommentsModalOpen', payload: true })
  }

  useEffect(() => {
    getData(path)
  }, [])

  useEffect(() => {
    if (!isLoading && !error && response) {
      setPostLength(response?.data.length)
      setPostComments(response)
    }
  }, [isLoading, error, response])

  return (
    <PostWrapper>
      <PostHeader>
        <img src={data.owner?.picture} alt={data.owner?.firstName} />
        <p>
          {data.owner?.firstName} {data.owner?.lasName}
        </p>
      </PostHeader>
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
