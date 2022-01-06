import { useState } from "react";
import { InputStyled } from "./styled";

import api from "../../api/api";

export const Form = ({submitEndpoint, children}) => {
  
  const [formInputs, setFormInputs] = useState({});

  const handleInputChange = event => {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormInputs({ ...formInputs, [fieldName] : fieldValue })
    
    console.log(formInputs)
    
    // TODO - CODE CREATION

  }
  
  // FORM SUBMITTION
  async function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)

    //TODO - ENTITY EXCEPTION HANDLER
    data.category = data["dev-category"];
    delete data["dev-category"];

    let {data: creationResult, status} = await api.post(`${submitEndpoint}/`, data);
    
    console.log(creationResult);
  }
  return(
    <form onChange={handleInputChange} onSubmit={submit} >
      <>
        <div className="head">
          <h1 className="title" > Novo</h1>
          <h2 id="dev-code">#</h2>
        </div>       
      </>
      {children}
    </form>
  )
}

export const Input = ({label,type = "text", name = label,...rest}) => {
  return (
    <InputStyled>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest} type={type} name={name} /> 
    </InputStyled>
  )

}
export const InputGroup = ({label,type = "text", name = label, ...rest}) => {
  return (
    <InputStyled>
      <label htmlFor={name}>{label}</label>
      <input 
        {...rest} type={type} name={name} /> 
    </InputStyled>
  )

}