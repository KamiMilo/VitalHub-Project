
import { ContainerHeader } from "../Container/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({img,name}) => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={img} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>{name}</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};

