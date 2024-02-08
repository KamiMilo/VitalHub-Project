
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium,MontserratAlternates_700Bold} from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium} from '@expo-google-fonts/quicksand';

import { RecPassword } from "./src/screens/RecPassword/RecPassword";
import { Verification } from "./src/screens/Verification/Verification";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";

//  Instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium
    
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    //  Navagação
    //  Container
    //  StackNavigator
    //  StackScreen

    //  Envolve a estrutura de navegação
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator initialRouteName="Navegacao">
        {/* Tela */}
        <Stack.Screen
          //  Nome da tela
          name='Navegacao'
          //  Componente que será chamdo
          component={Navigation}
          //  Título da tela
          options={{ title: 'Navegacao' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='Login'
          //  Componente que será chamdo
          component={Login}
          //  Título da tela
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='RecuperarSenha'
          //  Componente que será chamdo
          component={RecPassword}
          //  Título da tela
          options={{ title: 'Recuperar Senha' }}
        />

         <Stack.Screen
          //  Nome da tela
          name='Verification'
          //  Componente que será chamdo
          component={Verification}
          //  Título da tela
          options={{ title: 'Verifição do email' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='CreateAccount'
          //  Componente que será chamdo
          component={CreateAccount}
          //  Título da tela
          options={{ title: 'Criar Conta' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
