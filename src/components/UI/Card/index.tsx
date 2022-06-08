import React from 'react'
import { Container } from './styles'

export const UiCard: React.FC = ({ children }) => (
  <Container className="card">
    { children }
  </Container>
)