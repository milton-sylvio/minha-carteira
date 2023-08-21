import React from 'react'
import { Bullet, Container } from './styles'

const Spinner: React.FC = () => (
  <Container>
    <Bullet />
    <Bullet className="middle" />
    <Bullet />
  </Container>
)

export default Spinner