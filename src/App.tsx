import { useEffect, useContext } from 'react'
import { StoreContext } from './store/StoreContext'
import CommentsModal from './components/CommentsModal/CommentsModal'
import UserDetailsModal from './components/UserDetailsModal/UserDetailsModal'
import PostList from './components/PostList/PostsList'
import useSetPostList from './utils/hooks/useSetPostList'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
import Header from './UI/Header/Header'
import { LoginSocialWrapper } from './styles/LoginSocialWrapper.styles'

function App() {
  const { setPostList } = useSetPostList()
  const { store, dispatch } = useContext(StoreContext)
  const { isCommentsModalOpen, isUserDetailsModalOpen, loggedUserInfo } = store

  const setProfile: (data: any) => void = (data) => {
    const loggedUser = {
      givenName: data.given_name,
      picture: data.picture,
    }
    localStorage.setItem('userProfile', JSON.stringify(loggedUser))
    dispatch({ type: 'setLoggedUserInfo', payload: loggedUser })
  }

  useEffect(() => {
    setPostList('post')

    const loggedUser = localStorage.getItem('userProfile') || ''

    if (loggedUser !== '') {
      dispatch({ type: 'setLoggedUserInfo', payload: JSON.parse(loggedUser) })
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      <main>
        {!loggedUserInfo ? (
          <LoginSocialWrapper>
            <LoginSocialGoogle
              client_id={process.env.REACT_APP_G_OAUTH_ID || ''}
              onResolve={({ data }) => {
                setProfile(data)
              }}
              onReject={(err) => {
                console.log(err)
              }}
              scope='openid profile email'
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </LoginSocialWrapper>
        ) : (
          <>
            <PostList />
            {isCommentsModalOpen && <CommentsModal />}
            {isUserDetailsModalOpen && <UserDetailsModal />}
          </>
        )}
      </main>
    </div>
  )
}

export default App
