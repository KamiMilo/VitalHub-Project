import { Modal } from "react-native";

import { Title } from "../Title/style";
import { ButtonMTop, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/style";
import { ContainerCenterModal, ContainerModal, ImageModal, ModalContainertAge, ModalContent, ModalProfileName, ModalText } from "./style";
import { ButtonText } from "../AppointmentCard/Style";
import { Container } from "../Container/style";

const ProntuarioModal = ({visible, setShowAppointment, ...rest}) => {
    return (
    

        <Modal {...rest} visible={visible} transparent={true} animationType="fade" >
            <ContainerCenterModal>

            {/* view */}
            <ModalContent>           
            {/* imagem */}
            <ImageModal source= {{uri:"https://github.com/evy-oliveira0807.png"}}/>
            {/* Nome */}
            <ModalProfileName>Evelyn Oliveira </ModalProfileName>        
                <ModalText>19 Anos</ModalText>
                <ModalText>Evy_oliveira@gmail.com</ModalText>
            
            <ButtonMTop> 
                <ButtonTitle>Inserir Prontuário</ButtonTitle> 
            </ButtonMTop>
            <ButtonSecondary onPress={() => setShowAppointment(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
            </ModalContent>

        </ContainerCenterModal>
        </Modal>

        

);
};


export default ProntuarioModal;