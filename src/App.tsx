import { useEffect, useContext } from 'react'
import { StoreContext } from './store/StoreContext'
import CommentsModal from './components/CommentsModal/CommentsModal'
import UserDetailsModal from './components/UserDetailsModal/UserDetailsModal'
import PostList from './components/PostList/PostsList'
import useSetPostList from './utils/hooks/useSetPostList'

function App() {
  const { setPostList } = useSetPostList()
  const { store } = useContext(StoreContext)
  const { isCommentsModalOpen, isUserDetailsModalOpen } = store

  useEffect(() => {
    setPostList('post')
  }, [])

  return (
    <div className='App'>
      <main>
        <PostList />
        {isCommentsModalOpen && <CommentsModal />}
        {isUserDetailsModalOpen && <UserDetailsModal />}
      </main>
    </div>
  )
}

export default App
