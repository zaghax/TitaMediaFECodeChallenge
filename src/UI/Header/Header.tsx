import { HeaderWrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import UserTools from '../../components/UserTools/UserTools'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo/>
      <UserTools/>
    </HeaderWrapper>
  )
}

export default Header
