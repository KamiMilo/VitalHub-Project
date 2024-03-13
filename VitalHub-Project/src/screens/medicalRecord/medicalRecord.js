import { ScrollView } from "react-native"
import { Button, ButtonGoogle, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../../components/Button/style"
import { ModalText } from "../../components/CancellationModal/style"

import { Input } from "../../components/Input/style"
import { ModalProfileName } from "../../components/ProntuarioModal/style"
import { ContainerProntuario, ContainetDados, ImageProntuario, InputProntuario, SubtitleMr, TextData } from "./style"
import { LinkBold } from "../../components/LinkMedium/styles"
import { Container } from "../../components/Container/style"
// import { InputMedicalRecord } from "../../components/InputMedicalRecord/InputMedicalRecord"


export const MedicalRecord = ({ navigation }) => {
    return (

        <ScrollView>

            <ImageProntuario source={{ uri: "https://github.com/evy-oliveira0807.png" }} />

            <ModalProfileName>Evelyn Oliveira</ModalProfileName>

            {/* // idade e email: text */}

            <ContainetDados>
                <TextData>19 Anos</TextData>
                <TextData>Evy_oliveira@gmail.com</TextData>
            </ContainetDados>


            <ContainerProntuario>

                {/* // subtitulo */}

                <SubtitleMr>Descrição da consulta</SubtitleMr>
                <InputProntuario placeholder="Descrição da consulta" />

                <SubtitleMr>Diagnóstico do paciente</SubtitleMr>
                <Input placeholder="Diagnóstico do paciente" />

                <SubtitleMr>Prescrição médica</SubtitleMr>
                <InputProntuario placeholder="Prescrição médica " />



            </ContainerProntuario>


            <Container style={{ marginTop: 20 }}>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
            </Container>

            <ButtonSecondary style={{justifyContent: "center"}}>

            <ButtonSecondaryTitle style={{textAlign:"center", paddingLeft: 20}}> 
                Cancelar
            </ButtonSecondaryTitle>

            </ButtonSecondary>



        </ScrollView>

    )

}