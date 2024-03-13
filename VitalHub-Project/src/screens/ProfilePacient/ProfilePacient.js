
import { Label, LabelSmall } from "../../components/Label/Style";
import { Content, ContentInputSmall, ProfileImageLarge } from "./Style";
import { ContainerFlex, ContainerImage } from "../../components/Container/style";
import { ButtonEdit, ButtonLogout, ButtonTitle } from "../../components/Button/style";


const ProfilePacient = () => {
  return ( 
    <ContainerScroll>
      <Content>
        <ContainerImage>
          <ProfileImageLarge
            source={{uri:"https://github.com/evy-oliveira0807.png" }}
          />
        </ContainerImage>
        

        <Title>Richard Kosta</Title>

        <Subtitle>22 anos richard.kosta@gmail.com</Subtitle>

        <Label>Data de nascimento</Label>
        <Input placeholder="dd/mm/aaaa" />

        <Label>CPF</Label>
        <Input placeholder="879********" />

        <Label>Endereço</Label>
        <Input placeholder="Rua Niterói,180" />

        <ContainerFlex>
          <ContentInputSmall>
            <LabelSmall>Cep</LabelSmall>
            <InputSmall placeholder="09330-098" />
          </ContentInputSmall>

          <ContentInputSmall>
            <LabelSmall>Cidade</LabelSmall>
            <InputSmall placeholder="SCS - SP" />
          </ContentInputSmall>
        </ContainerFlex>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <ButtonEdit>
          <ButtonTitle>Editar</ButtonTitle>
        </ButtonEdit>

        <ButtonLogout onPress={() => {}} >
          <ButtonTitle>Sair do app</ButtonTitle>
        </ButtonLogout>

      </Content>
    </ContainerScroll>
  );
};

export default ProfilePacient;
