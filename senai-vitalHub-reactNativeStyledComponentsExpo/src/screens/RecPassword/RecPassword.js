import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"

export const RecPassword = ({navigation}) => {
    return(
      <Container>
        <Logo source={require("../../assets/Logo.png")}/>
        
        <Title>Recuperar Senha</Title>
        <Input 
          placeholder="Usúario ou E-mail"
        />

      </Container>
    )
  }