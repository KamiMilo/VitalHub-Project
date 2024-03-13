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
export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`
export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`

export const ButtonModal = styled(Button)`
  width: 285px;
`;

export const ButtonSendImage = styled(Button)`
  width: 172px;

  margin-top: 10px;
  align-items: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  background-color: #49b3ba;
  border-color: none;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 148px;
  height: 44px;

  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;

export const ButtonLogout = styled(Button)`
  background-color: #c1c1c1;
  width: 40%;
  margin-bottom: 30px;
`;

export const ButtonEdit = styled(Button)`
  background-color: #c1c1c1;
`
