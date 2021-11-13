import { useState } from 'react';

import Modal from '../../components/Modal';

import { StyledNewDeviceForm } from './styled';

export const NewDeviceModal = ({devCategory, closer}) => {
  // HANDLE FORM
  const [formInputs, setFormInputs] = useState({});
  const [devCode, setDevCode] = useState("")
  const handleDevInputChange = event => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    setFormInputs({ ...formInputs, [fieldName] : fieldValue })

    console.log(formInputs)
    // TODO - DEV CODE CREATION
    let createCode = [
      formInputs["dev-ip-cable"]?.length ,
      formInputs["dev-model"],
      formInputs["dev-category"]
    ]
    let code = createCode.map( creteria => {
      if(creteria != undefined)
        return creteria
      return
    } )
    code = code.join("-")
    setDevCode(code)

  }
  // FORM SUBMITTION
  function submitDevice(event) {

  }

  // TODO - RESET FORM FIELDS
  
  // HANDLE CLOSER - INCOMPLETE FORM DATA
  function handleCloser() {
    let formValues = Object.values(formInputs)
    // TEST - console.log(formValues)
    
    // VALIDATION IF IS ANY INPUTED
    formValues.length > 0 && !formValues.includes("")
      ? alert("Incomplete form")
      : closer()
  }

  return(
    <Modal toggleVisibility={handleCloser}>
      <StyledNewDeviceForm>
        <div className="modal-head">
          <h1 className="modal-title" > Novo dispositivo</h1>
          <h2 id="dev-code">#{devCode}</h2>

        </div>
        <form onChange={handleDevInputChange} >
          <div className="wrapper">
            <label htmlFor="dev-title">Título</label>
            <input 
              placeholder="dev-title" type="text" name="dev-title" /> 
          </div>
          <div className="net-props input-group">
            <div className="wrapper">
              <label htmlFor="dev-mac-cable">MAC ethernet</label>
              <input 
                placeholder="dev-mac-cable" type="text" name="dev-mac-cable" /> 
            </div>
            <div className="wrapper">
              <label htmlFor="dev-ip-cable">IP cabo</label>
              <input 
                placeholder="dev-ip-cable" type="text" name="dev-ip-cable" /> 
            </div>
          </div>
          
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="dev-local">Local</label>
              <input 
                placeholder="dev-local" type="text" name="dev-local" /> 
            </div>
            <div className="wrapper">
              <label htmlFor="dev-category">Category</label>
              <select type="text" name="dev-category" >
                {/* TODO */}
                <option value="select" disabled >Selecione a categoria</option>
                { devCategory.map((category) => {
                  return(
                    <option value={category}> {category}</option>
                  )

                })}

              </select>
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="dev-local">Modelo</label>
            <input 
              placeholder="dev-model" type="text" name="dev-model" /> 
          </div>
          
          <div className="wrapper">
            <label htmlFor="dev-specification">Especificação</label>
            <textarea 
              placeholder="dev-specification" type="text" name="dev-specification" /> 
          </div>
          
          
          {/* <input type="text" name="dev-mac-wireless" /> */}
          <button 
            onClick={submitDevice}
            id="submit-dev" 
          >Submit new device</button>
          
        </form>


      </StyledNewDeviceForm>
    </Modal>
  )
}