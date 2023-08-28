import React from 'react'

import Spinner from 'components/UI/Spinner'

import { Container } from './styles'
import { IButtonProps } from './types'

export const UiButton = ({
  icon,
  isLoading,
  children,
  ...rest
}: IButtonProps) => (
  <Container {...rest}>
    {icon && <img src={icon} alt="" />}
    {isLoading ? <Spinner /> : children}
  </Container>
)
