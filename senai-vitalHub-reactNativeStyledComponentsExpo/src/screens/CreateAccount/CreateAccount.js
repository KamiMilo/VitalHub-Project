import { Button, ButtonGoogle, ButtonMTop, ButtonTitle, ButtonTitleGoogle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { LinkBold, LinkMedium } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { AntDesign } from '@expo/vector-icons';

import { SubTittle } from "../../components/Text/Text"

export const CreateAccount = ({navigation}) => {
  return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Criar conta</Title>

      <SubTittle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTittle>
      
      <Input 
        placeholder="Usuário ou E-mail"
      />
      <Input 
        placeholder="Senha"
        secureTextEntry={true}
      />

        <Input 
        placeholder="Confirmar Senha"
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