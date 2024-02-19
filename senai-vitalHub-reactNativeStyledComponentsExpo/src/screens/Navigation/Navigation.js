import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View
      style={
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }
      }>

      <Button
        title="Login"
        onPress={
          () => navigation.navigate("Login")
        }
      />

     <Button
        title="Verification"
        onPress={
          () => navigation.navigate("Verification")
        }
      />

    <Button
        title="CreateAccount"
        onPress={
          () => navigation.navigate("CreateAccount")
        }
      />  


    <Button
        title="Home"
        onPress={
          () => navigation.navigate("Home")
        }
      />  


    </View>
  )
};