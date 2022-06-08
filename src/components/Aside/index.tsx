import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdNoteAdd
} from 'react-icons/md'

import { auth, signOut } from 'helpers/utils/firebase'
import { paths } from 'helpers/configs/paths'

import Logo from 'components/Logo'

import { useMenuMobile } from 'hooks/menu'
import { useTheme } from 'hooks/theme'

import { 
  Container, 
  Header, 
  MenuContainer, 
  MenuItem,
  MenuTitle,
  Toggle
} from './styles'

const Aside: React.FC = () => {
  const menu = [
    {
      path: paths.DASHBOARD.url,
      text: paths.DASHBOARD.title,
      icon: <MdDashboard />,
    }, 
    {
      path: paths.NEW_REGISTER.url,
      text: paths.NEW_REGISTER.title,
      icon: <MdNoteAdd />,
    }, 
    {
      path: paths.ENTRY.url,
      text: paths.ENTRY.title,
      icon: <MdArrowUpward />,
    }, 
    {
      path: paths.OUTPUT.url,
      text: paths.OUTPUT.title,
      icon: <MdArrowDownward />,
    },
  ]

  const history = useHistory()
  const handleSignOut = event => {
    event.preventDefault()
    signOut(auth)
    history.push(paths.SIGN_IN.url)
  }

  const { toggleTheme, theme } = useTheme()
  const [ getTheme, setTheme ] = useState(() => theme.mode === 'dark' ? true : false)
  const { toggleMenu } = useMenuMobile()

  const handleChangeTheme = () => {
    setTheme(!getTheme)
    toggleTheme()
  }

  return (
    <Container menuIsOpen={toggleMenu}>
      <Header>
        <Logo />
      </Header>

      <MenuContainer>
        <MenuTitle>Menu</MenuTitle>
        {
          menu.map(item => (
            <MenuItem 
              key={item.path}
              href={item.path} 
              className={
                window.location.pathname === item.path
                ? 'actived'
                : ''
              }
              title={item.text}>
              { item.icon }
              {item.text}
            </MenuItem>
          ))
        }
        <MenuItem
          title="Sair"
          onClick={handleSignOut}
        >
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>

      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
        className="header"
        onChange={handleChangeTheme} 
      />

    </Container>
  )
}

export default Aside