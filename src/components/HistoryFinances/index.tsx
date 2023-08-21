import React from 'react'

import { Container } from './styles'
import { IHistoryFinances } from './types'

const HistoryFinances: React.FC<IHistoryFinances> = ({
  borderColor,
  title,
  subtitle,
  amount
}) => (
  <Container borderColor={borderColor}>
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
)

export default HistoryFinances
