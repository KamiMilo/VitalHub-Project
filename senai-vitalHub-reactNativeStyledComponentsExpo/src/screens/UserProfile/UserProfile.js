import { Button, ButtonTitle } from "../../components/Buttons/Style";
import { Container, ContainerScroll, ContainerUser } from "../../components/Container/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { ImageUser } from "../../components/ImageUser/Style";
import { Input, InputDescription, LabelInput } from "../../components/Input/Style";
import { LinkBottom } from "../../components/LinkBottom/Style";
import { Title } from "../../components/Title/Style";

export const UserProfile = () => {
    return (
        <ContainerUser>
            <ImageUser source={require('../../assets/user.png')} />

            <Title>Richard Kosta</Title>

            <DefaultText >22 anos       richard.kosta@gmail.com</DefaultText>

            <ContainerScroll>
                <LabelInput>Descrição da consulta</LabelInput>
                <InputDescription
                    placeholder="Descrição"
                />
                <LabelInput>Diagnóstico do paciente</LabelInput>
                <Input
                    placeholder="Diagnóstico"
                />
                <LabelInput>Prescrição médica</LabelInput>
                <InputDescription
                    placeholder="Prescrição médica"
                />

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <LinkBottom>Cancelar</LinkBottom>
            </ContainerScroll>
        </ContainerUser>
    );
}