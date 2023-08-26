import React from 'react'

import { Container } from './styles'
import { IHistoryFinances } from './types'

const HistoryFinances = ({
  borderColor,
  title,
  subtitle,
  amount,
}: IHistoryFinances) => (
  <Container borderColor={borderColor}>
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
)

export default HistoryFinances
