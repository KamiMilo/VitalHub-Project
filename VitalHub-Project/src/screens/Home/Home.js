
import { StatusBar } from "react-native"

import { Header } from "../../components/Header/Header"

import { Container } from "../../components/Container/style"
import { ContainerButtons, ConteinerScheduleImage, ImageScheduleAppointment } from "./style"

import { useState } from "react"
import { ListComponent } from "../../components/List/List"
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment"
import CancellationModal from "../../components/CancellationModal/CancellationModal"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import ProntuarioModal from "../../components/ProntuarioModal/ProntuarioModal"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal"




const Consultas = [
    { id: 1, nome: "Allan", situacao: "pendente" },
    { id: 2, nome: "Evelyn Oliveira", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Sara", situacao: "pendente" }
]

export const Home = () => {

    // state perfil usuário
    const [profile, setProfile] = useState("Paciente");

    //Hook para renderizar a lista dependendo de qual botão for clicado
    const [statusLista, setStatusLista] = useState("pendente")
    // Satate para os modais
    const [showModalCancelar, setShowModalCancelar] = useState(false);
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowAppointment] = useState(false);


    return (
        <Container>

            <StatusBar />

            {/* Header */}
            <Header img={require('../../../assets/Mask-group.png')} name="Dr.Claudio" />

            {/* Calendar */}
            <CalendarHome />

            {/* filterAppointment (Container dos botoes) */}
            {/* container */}
            {/* botoes de consulta */}

            {/* Container  */}
            <ContainerButtons>

                <AbsListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "Agendadas"}
                    onPress={() => setStatusLista("pendente")}
                />

                <AbsListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizadas"}
                    onPress={() => setStatusLista("realizado")}
                />


                <AbsListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Canceladas"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </ContainerButtons>


            {/* Cards */}
            {/* Lista */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => statusLista == item.situacao && (
                    <AppointmentCard
                        situacao={item.situacao}
                        onPressCancel={() => setShowModalCancel(true)}
                        onPressAppointment={() => setShowAppointment(true)}
                    />
                )
                }

            />

            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ProntuarioModal
                visible={showModalAppointment}
                setShowAppointment={setShowAppointment}
            />
            {profile === "Paciente" && (
                <ConteinerScheduleImage onPress={() => setShowModalAgendamento(true)}>
                    <ImageScheduleAppointment
                        source={require("../../../assets/Agendar.png")}
                    />
                </ConteinerScheduleImage>
            )}

            {/* Passando direto a propriedade para exibicao do modal - cancelar */}
            <CancellationModal
                visible={showModalCancelar}
                setShowModalCancelar={setShowModalCancelar}
            />
            {/* Passando direto a propriedade para exibicao do modal - prontuário */}
            <AppointmentModal
                situacao={statusLista}
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            <AgendarConsulta
                visible={showModalAgendamento}
                setShowModalAgendamento={setShowModalAgendamento}
            />

        </Container>

    )
}