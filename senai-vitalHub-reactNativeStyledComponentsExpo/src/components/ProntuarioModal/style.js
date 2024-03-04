import styled from "styled-components";
import { Button } from "../Button/style";
import { ProfileName } from "../AppointmentCard/Style";
import { Modal } from "react-native-web";
import { Container } from "../Container/style";



export const PatientModal = styled.View`
    flex: 1;
    align-items:center ;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.6) ;
    `

export const ModalContent = styled.View`
    width: 90% ;
    padding: 30px 30px 10px ;
    border-radius: 10px ;
    background-color: #fff ;
    align-items:center ;
    justify-content:center;
    `

export const ModalText = styled.Text`
    font-size: 16px ;
    color: #5f5c6b ;
    text-align: center ;
    margin-top: 10px ;
    font-family: "Quicksand_500Medium";
    `

export const ButtonModal = styled(Button)`
    width: 80% ;
    `

export const ImageModal = styled.Image`
width: 100px;
height: 181px;
padding: 10px 5px 10px 5px;
`
export const ModalProfileName= styled(ProfileName)`
font-size: 20px;
margin-top: 10px;
text-align:center
`

export const ContainerCenterModal= styled.View`
justify-content:center;
width:360px;
height:640px;
margin-left:50px;
margin-top: 50px
`
