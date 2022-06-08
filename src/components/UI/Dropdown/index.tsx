import React from 'react'

import { Container } from './styles'
import { IDropdownProps } from './types'

export const UiDropdown: React.FC<IDropdownProps> = ({ 
  options, 
  id, 
  required,
  defaultValue,
  onChange, 
}) => (
  <Container
      id={id}
      onChange={onChange}
      defaultValue={defaultValue}
      required={required}
      className="dropdown"
    >
      {
        options.map(option => (
        <option 
          key={option.value}
          value={option.value}
        >
          { option.label }
        </option>
        ))
      }
  </Container>
)