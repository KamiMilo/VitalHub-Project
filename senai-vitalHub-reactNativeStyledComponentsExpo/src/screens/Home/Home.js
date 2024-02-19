
import { StatusBar } from "react-native"

import { Header } from "../../components/Header/Header"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/style"
import { ContainerButtons } from "./style"
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment"
import { useState } from "react"


const Consultas = [
    {id: 1, nome: "Allan" ,situacao:"pendente"},
    {id: 2, nome: "Evelyn" ,situacao:"realizado"},
    {id: 3, nome: "Carlos" ,situacao:"cancelado"},
    {id: 4, nome: "Sara" ,situacao:"pendente"}

]

export const Home = () => {

    //Hook para renderizar a lista dependendo de qual botão for clicado
    const [statusLista,setStatusLista] = useState("pendente")
    return(
        <Container>
            
            <StatusBar/>

            {/* Header */}
            <Header/>

            {/* Calendar */}
            <CalendarHome/>

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
            
        </Container>

    )
}