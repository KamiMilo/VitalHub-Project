import {
  AppointmentContent,
  ModalContent,
  TextModal,
  ModalImage,
  RowTextModal,
} from "./style";
import { Modal } from "react-native";



import { Title } from "../Title/style";
import { ButtonModal, ButtonSecondaryTitle, ButtonTitle } from "../Button/style";

const AppointmentModal = ({
  situacao,
  visible,
  setShowModalAppointment,
  typeProfile = "paciente",
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <AppointmentContent>
        <ModalContent>
          <ModalImage
            source={require("../../../assets/Mask-group.png")}
          />

          <Title>Dr. Claudio</Title>

          <RowTextModal>
            <TextModal>Clinico Geral</TextModal>

            <TextModal>CRM-15286</TextModal>
          </RowTextModal>

          {situacao !== "pendente" ? (
            <ButtonModal>
              <ButtonTitle>Inserir prontuário </ButtonTitle>
            </ButtonModal>
          ) : (
            <ButtonModal>
              <ButtonTitle>Ver local da consulta </ButtonTitle>
            </ButtonModal>
          )}

          <ButtonCancel onPress={() => setShowModalAppointment(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>

        </ModalContent>
      </AppointmentContent>
    </Modal>
  );
};

export default AppointmentModal;
