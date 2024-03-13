import { AntDesign } from '@expo/vector-icons';
import { ButtonCardLink, ButtonText, ClockCard, ContainerCardList,
 ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";

export const Card = (situacao= "pendente",onPressCancel,OnPressAppointment) => {
    return (
        // container
        <ContainerCardList>

            <ProfileImage source={{uri:"https://github.com/evy-oliveira0807.png" }}/>
                <ContentCard>
                    <DataProfileCard>
                        <ProfileName>Evelyn Oliveira</ProfileName>
                        <ProfileData>

                            <TextAge>18 Anos</TextAge>
                            <TextBold>Rotina</TextBold>
                        </ProfileData>
                    </DataProfileCard>

                     <ViewRow>
                    
                        <ClockCard situacao={situacao}>
                            
                         <AntDesign name="clockcircle"
                          size={15} 
                          color={situacao == "pendente" ? "#49B3BA" : "#8C8A97" }
                          style={{marginTop: 4}} />
                         <TextBold>14:00</TextBold>
                         </ClockCard>
                         {/* vALIDA E MOSTRA O TIPO DE BOTÃO CONFORME A SITUAÇÃO */}
                            {
                                situacao == "cancelado" ? (
                                    <></>
                                ) : situacao == "pendente" ? (

                          <ButtonCardLink onpress = {onPressCancel}>
                             <ButtonText>Cancelar</ButtonText>
                         </ButtonCardLink>
                                ) : (
                                    <ButtonCardLink onpress = {OnPressAppointment}>
                                    <ButtonText>Ver Prontuario</ButtonText>
                                </ButtonCardLink> 
                                )

                            }

                    </ViewRow> 

                </ContentCard>

            
        </ContainerCardList>
    )

}