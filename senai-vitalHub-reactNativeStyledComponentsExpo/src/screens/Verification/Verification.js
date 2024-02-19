import { Button, ButtonTitle } from "../../components/Button/style"
import { ConatinerCode, Container } from "../../components/Container/style"
import { InputCode } from "../../components/Input/style"

import { LinkBold } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { SubTittle } from "../../components/Text/Text"
import { Title } from "../../components/Title/style"

export const Verification = ({navigation}) => {

    return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Verifique o seu Email</Title>

      <SubTittle>Digite o código de 4 dígitos enviado para </SubTittle>


      <ConatinerCode>

        <InputCode placeholder={'0'} ></InputCode>
        <InputCode placeholder={'0'}></InputCode>
        <InputCode placeholder={'0'}></InputCode>
        <InputCode placeholder={'0'}></InputCode>

      </ConatinerCode>

        <Button onPress={()=> {navigation.navigate("Login")}}> 
          <ButtonTitle>Verificar</ButtonTitle>
        </Button>
      <LinkBold>Reenviar Código</LinkBold>

    </Container>
        
    );

}