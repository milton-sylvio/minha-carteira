import styled from 'styled-components'
import { border, flexbox, layout, position, shadow, space } from 'styled-system'

import { IBox } from './types'

export const Box = styled('div')<IBox>(
  border,
  flexbox,
  layout,
  position,
  shadow,
  space,
)
