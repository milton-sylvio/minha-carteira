import React from 'react'

import Spinner from 'components/Spinner'

import { Container } from './styles'
import { IButtonProps } from './types'

export const UiButton: React.FC<IButtonProps> = ({icon, isLoading, children, ...rest }) => (
  <Container { ...rest }>
      { icon && <img src={icon} alt="" />}
      {isLoading ? (<Spinner />) : children}
  </Container>
)
