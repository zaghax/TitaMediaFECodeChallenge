import { useEffect } from 'react'
import PostList from './components/PostList/PostsList'
import useSetPostList from './utils/hooks/useSetPostList'

function App() {
  const { setPostList } = useSetPostList()

  useEffect(() => {
    setPostList('post')
  }, [])

  return (
    <div className='App'>
      <main>
        <PostList />
      </main>
    </div>
  )
}

export default App
