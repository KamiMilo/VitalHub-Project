
import { ContainerHeader } from "../Container/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={require('../../../assets/Mask-group.png')} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>Dr.Claudio</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};