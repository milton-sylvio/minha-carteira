import React from 'react'

import Logo from 'components/Logo'

import {
  Container,
  ContainerSignin,
  ContainerForm,
} from './styles'

const AuthTemplate: React.FC = ({ children }) => (
  <Container>
    <ContainerSignin>
      <Logo />

      <ContainerForm>
        { children }
      </ContainerForm>
    </ContainerSignin>
  </Container>
);

export default AuthTemplate;