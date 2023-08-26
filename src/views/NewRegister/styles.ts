import styled from 'styled-components'
import Card from 'components/UI/Card/styles'

export const Container = styled.section``

export const FormCard = styled(Card)`
  width: 100%;
`

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  select {
    margin-left: 0;
  }

  @media (max-width: ${props => props.theme.general.sizes.small}) {
    button {
      width: 100%;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > div {
    flex: 1;
  }

  &.flex-end {
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: ${props => props.theme.general.sizes.small}) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`

export const FormGroup = styled.div`
  padding: ${props => props.theme.general.space[0]}
    ${props => props.theme.general.space[1]};
  margin-bottom: ${props => props.theme.general.space[3]};
`

export const FormLabel = styled.label`
  display: flex;
  margin-bottom: ${props => props.theme.general.space[1]};
`
