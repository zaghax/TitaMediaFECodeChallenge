import { useState, useEffect } from 'react'
import Tag from '../Tag/Tag'
import useHttp from '../../utils/hooks/useHttp'
import { postDataTypes, responseDataArrayTypes } from '../../types/types'
import { PostWrapper, PostImage, PostHeader, PostFooter } from './Post.styles'

interface propTypes {
  data: postDataTypes
}

const Posts = ({ data }: propTypes) => {
  const { response, isLoading, error, getData } = useHttp()
  const [postComments, setPostComments] = useState<responseDataArrayTypes>()
  const path = `user/${data.owner?.id}/comment`

  useEffect(() => {
    getData(path)
  }, [])

  useEffect(() => {
    if (!isLoading && !error && response) {
      setPostComments(response?.data)
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
        <p>Look {postComments?.length} comments</p>
      </PostFooter>
      <hr role='separator' />
    </PostWrapper>
  )
}

export default Posts
