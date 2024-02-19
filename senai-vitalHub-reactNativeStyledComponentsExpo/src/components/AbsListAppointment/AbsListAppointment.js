import { ButtonTabsStyle, ButtonTextStyle } from "./style"

export const AbsListAppointment = ({textButton,clickButton= false, onPress}) => {

    return(

        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
            {/* Texto do Botão */}
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    )

}