import React from 'react'

import { Container, Controllers, TitleHeader } from './styles'
import { IContentHeader } from './types'

const ContentHeader: React.FC<IContentHeader> = ({
  title,
  children
}) => (
  <Container className="content-header">
    <TitleHeader>
      {title}
    </TitleHeader>
    
    <Controllers>
      {children}
    </Controllers>
  </Container>
)

export default ContentHeader
