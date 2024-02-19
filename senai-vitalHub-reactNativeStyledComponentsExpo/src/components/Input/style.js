import styled from "styled-components/native";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#49B3BA"
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  border-radius: 5px;
  border: 2px solid #49B3BA;
  margin-top: 15px;
  font-size: 16px;
  font-family: 'MontserratAlternates_600SemiBold';
`

export const InputDescription = styled(Input)`
    height: 121;
    text-align: start;
`

export const InputCode = styled(Input).attrs({
  placeholderTextColor: '#34898F',
  keyboardType: 'numeric',
}
)`
width:65px;
height: 62px;
font-size: 25px;
flex-direction:row;
margin: 5px 10px 20px 20px;
`




