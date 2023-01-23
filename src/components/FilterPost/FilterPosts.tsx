import { useState } from 'react'
import useSetPostList from '../../utils/hooks/useSetPostList'
import { FilterWrapper } from './FilterPost.styles'

const FilterPost = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const { setPostList } = useSetPostList()

  const filterPostsHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const path = `tag/${inputValue}/post`
    setPostList(path)
  }

  const setFilterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }
  return (
    <FilterWrapper onSubmit={filterPostsHandler}>
      <input type='text' onChange={setFilterValue} placeholder='Filter by tag' />
      <button type='submit'>Send</button>
    </FilterWrapper>
  )
}

export default FilterPost
