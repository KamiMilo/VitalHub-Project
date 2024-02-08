import styled from "styled-components/native";

//BOTÕES

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;


background-color: #496bba;
border-radius: 5px;
margin-bottom: 15px;
border: 1px solid #496bba;
padding: 12px 8px 12px 8px;

justify-content: center;
align-items:center;
`


export const ButtonGoogle = styled(Button)`
flex-direction: row;
background-color: #FAFAFA;
gap: 10px;
`
export const ButtonCenter = styled(ButtonGoogle)`
border: 1px solid #ffffff;
align-items: center;

`

export const ButtonMTop= styled(Button)`
margin-top: 30px;
`

//TEXTOS DO BOTÃO

export const ButtonTitle = styled.Text`
text-align: center;
color: #FFFFFF;
font-size: 16px;
font-family:"MontserratAlternates_700Bold";
text-transform: uppercase;
`

export const ButtonTitleGoogle = styled(ButtonTitle)`
color:#496bba;
`

