import useSetPostList from '../../utils/hooks/useSetPostList'
import { TagWrapper } from './Tag.styles'
interface propTypes {
  data: string
}

const Tag = ({ data }: propTypes) => {
  const { setPostList } = useSetPostList()

  const filterByTagHandler = (tag: string) => {
    const path = `tag/${tag}/post`
    setPostList(path)
  }

  return (
    <>
      <TagWrapper onClick={() => filterByTagHandler(data)}>{data} </TagWrapper>
    </>
  )
}

export default Tag
