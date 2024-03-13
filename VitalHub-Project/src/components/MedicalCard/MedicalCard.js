import { MedicalCards, ProfileDataCard, ProfileImage, ProfileName, SimpleText } from "./Style";


const MedicalCard = ({selected = true}) => {
  return (
    <MedicalCards selected={selected}>
      <ProfileImage source={require("../../../assets/usman.jpg")} />

      <ProfileDataCard>
        <ProfileName>Dr Usman</ProfileName>
        <SimpleText>Cardiologista</SimpleText>
      </ProfileDataCard>
    </MedicalCards>
  );
};

export default MedicalCard;
