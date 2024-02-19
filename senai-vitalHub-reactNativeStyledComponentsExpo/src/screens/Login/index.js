import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { LinkBold, LinkMedium } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./style"
import { RecPassword } from "../RecPassword/RecPassword"

export const Login = ({navigation}) => {
  const onPressRecoverPassword = () => {
    onPress("RecPassword")
  }

  return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Entrar ou criar conta</Title>
      
      <Input 
        placeholder="Email"
      />
      <Input 
        placeholder="Senha"
        secureTextEntry={true}
      />
      
      <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>Esqueceu sua Senha?</LinkMedium>

      <Button onPress={()=> {navigation.navigate("Home")}}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>


      <ButtonGoogle>
       <AntDesign name="google" size={18} color="#496bba" />
        <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
      </ButtonGoogle>

      
      <ContentAccount>
        <TextAccount>Não tem conta?
          <LinkBold onPress= {() => {navigation.navigate("CreateAccount")}} > Crie uma conta agora</LinkBold>

        </TextAccount>
      </ContentAccount>
    </Container>
  )
}