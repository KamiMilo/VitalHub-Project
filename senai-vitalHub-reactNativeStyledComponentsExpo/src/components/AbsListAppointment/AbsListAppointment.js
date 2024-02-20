import { ButtonTabStyle, ButtonTextStyle } from "./style"

export const AbsListAppointment = ({textButton,clickButton= false, onPress}) => {

    return(

        <ButtonTabStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabStyle>
    )

}