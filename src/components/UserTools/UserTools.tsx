import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import { ToolsWrapper, ProfileActions } from './UserTools.styles'

const UserTools = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { loggedUserInfo } = store

  const logoutHandler = () => {
    localStorage.removeItem('userProfile')
    dispatch({ type: 'setLoggedUserInfo', payload: null })
  }

  return (
    <>
      {loggedUserInfo && (
        <ToolsWrapper>
          <strong>Hi! {loggedUserInfo.givenName}</strong>
          <ProfileActions>
            <img
              src={loggedUserInfo.picture || 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'}
              alt={loggedUserInfo.givenName}
            />
            <button type='button' onClick={logoutHandler}>
              Log out
            </button>
          </ProfileActions>
        </ToolsWrapper>
      )}
    </>
  )
}

export default UserTools
