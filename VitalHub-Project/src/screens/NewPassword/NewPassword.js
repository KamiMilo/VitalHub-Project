import { Button, ButtonGoogle, ButtonMTop, ButtonTitle, ButtonTitleGoogle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { LinkBold, LinkMedium } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { AntDesign } from '@expo/vector-icons';

import { SubTittle } from "../../components/Text/Text"

export const NewPassword = ({navigation}) => {
  return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Redefinir senha</Title>

      <SubTittle>Insira e confirme a sua nova senha</SubTittle>
      
      <Input 
        placeholder="Nova Senha"
      />
      <Input 
        placeholder="SeConfirmar nova senha"
        secureTextEntry={true}
      />

      
      <ButtonMTop>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </ButtonMTop>
      
      <Container>
      <LinkBold onPress={()=> {navigation.navigate("Login")}} >Cancelar</LinkBold>
      </Container>


    </Container>
  )
}