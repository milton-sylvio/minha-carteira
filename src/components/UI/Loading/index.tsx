import React from 'react'

import { 
  Container,
  Content,
  Title,
  BarLoading
} from './styles'

export const UiLoading: React.FC = () => (
  <Container>
    <Content>
      <Title>Carregando...</Title>
      <BarLoading />
    </Content>
  </Container>
)