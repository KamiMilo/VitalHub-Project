import styled from "styled-components";
import { Title } from "../Title/style";

export const ContainerCardList= styled.View `
margin-bottom: 12px;
padding: 10px 5px 10px 5px;
width:90%;
flex-direction:row;
gap: 10px;

`

export const ProfileImage= styled.Image `
width: 77px;
height: 80px;
border-radius:5px;
`
export const ContentCard= styled.View `
width:90%;
background-color:white;
`

export const DataProfileCard= styled.View`
    flex-direction: column;

`
export const ProfileName= styled(Title)`
font-size:16px;
`
export const ProfileData=styled.View`
flex-direction:row;
gap: 10px;
`
export const TextAge= styled.Text`
font-size:14px;
color: #8C8A97;
font-family: "Quicksand_400Regular";

`
export const TextBold= styled.Text`
font-family: "Quicksand_500Medium";
`

export const ViewRow= styled.View`
flex-direction: row;
padding: 7px 0px;
gap: 6px;
`
export const ClockCard= styled.View`
flex-direction:row;
justify-content:center;
width: 100px;
height: 26px;
background-color:${(props)=> props.situacao == "pendente" ? "#E8FCFD" : "#F10F5"};
border-radius:5px;
gap: 4px;
`
export const ButtonText= styled.Text`
text-align:center;
color:${((props)=> props.situacao == "pendente" ? "#c81d25" : "#344f8f")};
font-size: 12px;
font-family: 'MontserratAlternates_500Medium';
`
export const ButtonCardLink= styled.View`
width: 100px;
height: 26px;
background-color: #ffffff;
`






