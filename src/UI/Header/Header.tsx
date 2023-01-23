import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import { HeaderWrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import UserTools from '../../components/UserTools/UserTools'
import FilterPost from '../../components/FilterPost/FilterPosts'

const Header = () => {
  const { store } = useContext(StoreContext)
  const { loggedUserInfo } = store

  return (
    <HeaderWrapper>
      <Logo />
      {loggedUserInfo && (
        <>
          <FilterPost />
          <UserTools />
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
