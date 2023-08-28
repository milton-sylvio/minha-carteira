import React from 'react'
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system'

export type IBox = BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps

export interface IUiBox extends IBox {
  children: React.ReactNode
}
