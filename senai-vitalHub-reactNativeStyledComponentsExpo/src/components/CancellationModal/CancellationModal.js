import { Modal } from "react-native";

import { Title } from "../Title/style";
import { ButtonMTop, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/style";
import { ImageModal, ModalContent, ModalText } from "./style";
import { ButtonText } from "../AppointmentCard/Style";

const CancellationModal = ({visible, setShowModalCancel, ...rest}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade" style= {{marginRight: 50}} >
            <ModalContent>

            <Title>Cancelar consulta</Title>

            <ModalText> Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, 
                deseja mesmo cancelar essa consulta?</ModalText>

            <ButtonMTop> 
                <ButtonTitle>Confirmar</ButtonTitle> 
            </ButtonMTop>
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

            </ModalContent>
        </Modal>
    );
};

export default CancellationModal;