import React, { useRef } from 'react'

import { Container } from './styles'
import { IInputProps } from './types'

export const UiInput: React.FC<IInputProps> = ({ 
  icon: Icon, 
  maskInput: MaskInput,
  ...rest 
}) => { 
  const getIcon = !!Icon
  const inputRef = useRef(null);

  return (
    <Container showIcon={getIcon}>
      { Icon && <Icon /> }
      { !MaskInput ? <input ref={inputRef} { ...rest } /> : <MaskInput  { ...rest } /> }
    </Container>
  )
}