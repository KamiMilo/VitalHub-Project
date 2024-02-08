import { Button, ButtonMTop, ButtonTitle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTittle } from "../../components/Text/Text"
import { Title } from "../../components/Title/style"

export const RecPassword = ({navigation}) => {
    return(
      <Container>
        <Logo source={require("../../assets/Logo.png")}/>
        
        <Title>Recuperar Senha</Title>

        <SubTittle>Digite abaixo seu email cadastrado que 
          enviaremos um link para recuperação de senha</SubTittle>
        <Input 
          placeholder="Usúario ou E-mail"
        />
        
        <ButtonMTop onPress={()=> {navigation.navigate("Verification")}}> 
          <ButtonTitle>Continuar</ButtonTitle>
          
        </ButtonMTop>

      </Container>
    )
  }