import React, { createContext, useState, useContext } from 'react'

interface IMenuMobile {
  toggleMenu: boolean
  handleToggleMenu(): void
}

const MenuMobileContext = createContext<IMenuMobile>({} as IMenuMobile)

const MenuMobileProvider: React.FC = ({ children }) => {
  const [ toggleMenu, setToggleMenu ] = useState(false)
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <MenuMobileContext.Provider value={{ toggleMenu, handleToggleMenu }}>
      {children}
    </MenuMobileContext.Provider>
  )
}

function useMenuMobile(): IMenuMobile {
  const context = useContext(MenuMobileContext)
  return context
}

export { MenuMobileProvider, useMenuMobile }
