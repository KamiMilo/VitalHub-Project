import { ViewContainer, ModalContent, ViewOption } from './Style'
import { Modal } from 'react-native'


import { Label } from '../../components/Label/Style'


import { ButtonSecondaryTitle, ButtonTitle } from '../../components/ButtonTitle/Style'
import { useEffect, useState } from 'react'
import { Title } from '../../components/Title/style'
import { Input, TextInputCheckbox } from '../../components/Input/style'
import { Button, ButtonSecondary } from '../../components/Button/style'


const types = [
  { id : 0, tipo : 'Rotina'},
  { id : 1, tipo : 'Exame'},
  { id : 2, tipo : 'Urgência'}
]

const AgendarConsulta = ({ visible = true, setShowModalAgendamento, ...rest }) => {
  const [tipoConsulta, setTipoConsulta] = useState('')

  return ( 
    <Modal { ...rest } visible={visible} transparent={true} animationType='fade'>
      <ModalContent>
        <ViewContainer>

          <Title>Agendar Consulta</Title>

          <Label>Informe o tipo de consulta</Label>
          <Input placeholder='Tipo de consulta' />

          <Label>Qual o nível da consulta</Label>
          <ViewOption>
            {
              types.map( (item) => {
                return (
                  <InputCheckbox
                    key={item.id} 
                    onPress={ e => setTipoConsulta( item.tipo ) }
                    optionSelected={ tipoConsulta == item.tipo ? true : false }
                  >
                    <TextInputCheckbox optionSelected={ tipoConsulta == item.tipo ? true : false }>
                      { item.tipo }
                    </TextInputCheckbox>
                  </InputCheckbox>
                )
              })
            }
          </ViewOption>


          <Label>Qual a localização desejada</Label>
          <Input placeholder='Informe a localização' />

          <Button>
            <ButtonTitle>
              Continuar
            </ButtonTitle>
          </Button>

          <ButtonSecondary onPress={e => setShowModalAgendamento(false)}>
            <ButtonSecondaryTitle>
              Cancelar
            </ButtonSecondaryTitle>
          </ButtonSecondary>

        </ViewContainer>
      </ModalContent>
    </Modal>
  )
}

export default AgendarConsulta