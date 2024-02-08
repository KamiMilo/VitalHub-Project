import { ContentInput } from "./style"

//Input para o cõdigo de verificação do email
//...
export const InputCode = ({
    editable = 'true',
    keyboardType = 'numeric',
    placeholder = '0',
    maxLength 

}) => {

    return ( 
      <ContentInput
      editable= {editable}
      keyboardType ={keyboardType}
      maxLength = {maxLength}
      placeholder = {placeholder}
      >    
      </ContentInput>
    )

}