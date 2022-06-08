import React from 'react'

import ContentHeader from 'components/ContentHeader'
import CurrencyInput from 'components/CurrencyInput'
import { UiButton, UiDropdown, UiInput } from 'components/UI'

import { 
  Container, 
  FormCard,
  Forms,
  FormContainer,
  FormGroup,
  FormLabel
} from './styles'

const NewRegister: React.FC  = () => {

  const types = [
    {
      'value': '',
      'label': 'Selecione',
    },
    {
      'value': 'entrada',
      'label': 'Entrada',
    },
    {
      'value': 'saida',
      'label': 'Saída',
    },
  ];
  const frequencies = [
    {
      'value': '',
      'label': 'Selecione',
    },
    {
      'value': 'recorrente',
      'label': 'Recorrente',
    },
    {
      'value': 'eventual',
      'label': 'Eventual',
    },
  ];

  return (
    <Container>
      <ContentHeader title="Novo Registro" />

      <FormCard>
        <Forms onSubmit={() => {}}>
          <FormContainer>
            <FormGroup>
              <FormLabel htmlFor="description">
                Descrição
              </FormLabel>
              <UiInput
                name="description" 
                id="description" 
                type="text"
                placeholder="Ex.: Conta de água"
                required
              />
            </FormGroup>
          </FormContainer>

          <FormContainer>
            <FormGroup>
              <FormLabel htmlFor="type">
                Tipo
              </FormLabel>
              <UiDropdown
                id="type" 
                options={types} 
                onChange={() => {}}
                defaultValue="Selecione"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="date">
                Data
              </FormLabel>
              <UiInput
                name="date" 
                id="date" 
                type="date"
                placeholder="__/__/____"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="frequency">
                Frequência
              </FormLabel>
              <UiDropdown
                id="frequency" 
                options={frequencies} 
                onChange={() => {}}
                defaultValue="Selecione"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="money">
                Valor
              </FormLabel>
              <UiInput
                name="money" 
                id="money" 
                maskInput={CurrencyInput}
                placeholder="R$ XX.XXX,XX"
                required
              />
            </FormGroup>
          </FormContainer>
      
          <FormContainer className="flex-end">
            <FormGroup>
              <UiButton type="submit" icon="">
                Cadastrar
              </UiButton>
            </FormGroup>
          </FormContainer>
        </Forms>
      </FormCard>
    </Container>
  )
}

export default NewRegister