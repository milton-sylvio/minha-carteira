import React from 'react'

import { useMenuMobile } from 'hooks/menu'

import { Container, Overlay } from './styles'

const Content: React.FC = ({ children }) => {
  const { toggleMenu } = useMenuMobile()

  return (
    <Container>
      { children }
      <Overlay className={ toggleMenu ? 'overlay' : '' } />
    </Container>
  )
}

export default Content