import { Button, ButtonGoogle, ButtonTitle } from "../../components/Button/style"
import { ModalText } from "../../components/CancellationModal/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { ModalProfileName } from "../../components/ProntuarioModal/style"
import { ContainerProntuario, ContainetDados, ImageProntuario, InputProntuario, SubtitleMr, TextData } from "./style"

export const MedicalRecord = ({navigation}) => {
return(
   
    <>
    <ImageProntuario source={{uri:"https://github.com/evy-oliveira0807.png" }} />
    
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



    <Button>
        <ButtonTitle>Salvar</ButtonTitle>
    </Button>

    
    </>
    
)

}