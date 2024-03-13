import styled, { css } from "styled-components";

export const ButtonTabStyle = styled.TouchableHighlight`
padding: 12px 14px;
border-radius: 5px;

/*condição para a propriedade clickButton para se o 
botão estiver clicado vai aplicar esse css*/

${props => props.clickButton ? css`
    background-color: #496BBA;
    `
        : css`
     background-color: transparent;
     border: 2px solid #607EC5;
`}
`

export const ButtonTextStyle = styled.Text`
font-size: 12px;
font-family: 'MontserratAlternates_600SemiBold';

/* se o clickButton for true ,a cor da fonte será branca 
caso contrário será azul */
${props => props.clickButton ?
        css`
color: #fbfbfb; 
`
        :
        css`
color:#607EC5;
`
    }

`