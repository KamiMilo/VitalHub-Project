import { Modal } from "react-native"
import { LinkCancel } from "../Links/style"
import { ButtonBox, ButtonCancel, ButtonLoginVE, ButtonModal } from "../button/style"
import { ContainerModal } from "../container/style"
import { ButtonTitle, RegularText, RegularTextModal, Title, TitleM, TitleModal } from "../title/style"
import { ContainerBoxModal, ModalCancel, PacientModal } from "./Style"

import * as Notifications from "expo-notifications";
import { useEffect } from "react"

export const CancelAppointmentModal = ({
    visible, setShowModalCancel, onPressConfirmation, ...rest
}) => {

    //solicitar as permissoes de notificação ao iniciar o app
    Notifications.requestPermissionsAsync();

    //definir como as notificações devem ser tratadas quando recebidas
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,//alerta da notificação
            shouldPlaySound: false, //se a notificação terá som ou não
            shouldSetBadge: false //mostra o numero de notificações no icone do app
        })
    });

    const handleNotification = async() => {
        const {status} = await Notifications.getPermissionsAsync();

        if (status !== 'granted') {
            alert("Ative as notificações");
            return;
          }

          await Notifications.scheduleNotificationAsync({
            content: {
<<<<<<< HEAD
              title: "Consulta Cancelada!",
              body: "uma consulta foi cancela ,toque para saber mais"
=======
              title: "Consulta cancelada",
              body: "uma consulta foi cancelada. toque para saber mais"
>>>>>>> 3a8dd6cd97da45d6782e8ef4d0277933e623c04d
            }, 
            trigger : null
          }) 
    }

    return (

<<<<<<< HEAD
        <ModalCancel {...rest} visible={visible} transparent={true} animationType="fade"
        >
=======
        <ModalCancel {...rest} visible={visible} transparent={true} animationType="fade" >
>>>>>>> 3a8dd6cd97da45d6782e8ef4d0277933e623c04d
            <PacientModal>
                <ContainerBoxModal>
                    <TitleM>Cancelar consulta</TitleM>
                    <RegularTextModal>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</RegularTextModal>
                    <ButtonModal onPress={() => {onPressConfirmation
                    handleNotification()}}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonBox onPress={() => setShowModalCancel(false)}>
                        <LinkCancel>Cancelar</LinkCancel>
                    </ButtonBox>

                </ContainerBoxModal>
            </PacientModal>

        </ModalCancel>

        // <ContainerModal>
        //     <ContainerBoxModal>
        //         <TitleModal>Cancelar consulta</TitleModal>
        //         <RegularTextModal>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</RegularTextModal>
        //         <ButtonLoginVE>
        //             <ButtonTitle>Confirmar</ButtonTitle>
        //         </ButtonLoginVE>

        //         <LinkCancel>Cancelar</LinkCancel>
        //     </ContainerBoxModal>

        // </ContainerModal>
    )
}

