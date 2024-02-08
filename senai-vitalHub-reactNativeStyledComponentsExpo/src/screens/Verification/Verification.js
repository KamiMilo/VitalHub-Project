import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { InputCode } from "../../components/InputCode"
import { LinkBold } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { SubTittle } from "../../components/Text/Text"
import { Title } from "../../components/Title/style"

export const Verification = () => {

    return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Verifique o seu Email</Title>

      <SubTittle>Digite o código de 4 dígitos enviado para </SubTittle>

      {/* <InputCode>0</InputCode>
      <InputCode>0</InputCode>
      <InputCode>0</InputCode>
      <InputCode>0</InputCode> */}
    {/* 
        <Input>Entrar</Input> */}
      <LinkBold>Reenviar Código</LinkBold>

    </Container>
        
    );

}