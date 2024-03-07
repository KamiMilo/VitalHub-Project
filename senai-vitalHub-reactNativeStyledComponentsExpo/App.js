
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';

import { RecPassword } from "./src/screens/RecPassword/RecPassword";
import { Verification } from "./src/screens/Verification/Verification";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { Home } from "./src/screens/Home/Home";
import { NewPassword } from "./src/screens/NewPassword/NewPassword";
import { MedicalRecord } from "./src/screens/medicalRecord/medicalRecord";
import { HomePatient } from "./src/screens/HomePatient/HomePatient";
import { Main } from "./src/screens/Main/Main";





//  Instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600SemiBold

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
      <Stack.Navigator initialRouteName="Navigation">
        {/* Tela */}
        <Stack.Screen

          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />


        <Stack.Screen
          name='RecuperarSenha'
          component={RecPassword}
          options={{ title: 'Recuperar Senha' }}
        />

        <Stack.Screen

          name='Verification'

          component={Verification}
          options={{ title: 'Verifição do email' }}
        />

        <Stack.Screen

          name='NewPassword'

          component={NewPassword}
          options={{ title: 'NewPassword' }}
        />

        <Stack.Screen
          name='Main'
          component={Main}
        />

        <Stack.Screen

          name='CreateAccount'

          component={CreateAccount}
          options={{ title: 'Criar Conta' }}
        />

        <Stack.Screen

          name='Home'

          component={Home}
          options={{ title: 'Home' }}
        />

        <Stack.Screen

          name='MedicalRecord'

          component={MedicalRecord}
          options={{ title: 'medicalRecord' }}
        />

        <Stack.Screen

          name='Navigation'

          component={Navigation}
          options={{ title: 'Navigation' }}
        />

        <Stack.Screen

          name='HomePatient'

          component={HomePatient}
          options={{ title: 'HomePatient' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
