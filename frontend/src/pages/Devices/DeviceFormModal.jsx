import { useEffect, useState } from 'react';
import api from '../../api/api';

import Modal from '../../components/Modal';

import { StyledNewDeviceForm } from './styled';

export const NewDeviceModal = ({devicesCategories, deviceToEdit, closer}) => {
  // HANDLE FORM
  const [formInputs, setFormInputs] = useState({});
  const [devCode, setDevCode] = useState("")
  
  const [device, setDevice] = useState({});
  useEffect(()=>{
    if(!deviceToEdit) {
      setDevice({});
    } else {
      setDevice(device);
    }
  },[])

  const handleDevInputChange = event => {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormInputs({ ...formInputs, [fieldName] : fieldValue })
    
    console.log(formInputs)
    // TODO - DEV CODE CREATION
    let createDeviceCode = [
      formInputs["dev-ip-cable"]?.length ,
      formInputs["dev-model"],
      formInputs["dev-category"]
    ]
    
    let code = createDeviceCode.map( creteria => {
      if(creteria != undefined)
      return creteria
      return
    } )
    code = code.join("-")
    setDevCode(code)
    // ======
    
    
  }
  // FORM SUBMITTION
  async function submitDevice(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data.category = data["dev-category"];
    delete data["dev-category"];
    
    // console.log(data);

    let {data:creationResult, status} = await api.post("dispositivos/", data);
    if(status == 200 || status == 201) {
      closer();
    }
    
    console.log(creationResult);
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
        <form onChange={handleDevInputChange} onSubmit={submitDevice}>
          <h3 className="field-group-name title" >
            Dados do dispositivo
          </h3>
          <div className="wrapper">
            <label htmlFor="alias">Título</label>
            <input 
              placeholder="dev-title" type="text" name="alias" /> 
          </div>
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="specification">Modelo</label>
              <input 
                placeholder="dev-model" type="text" name="serviceTag" /> 
            </div>
            <div className="wrapper">
              <label htmlFor="cpu">Processador</label>
              <input type="text" name="cpu" />
            </div>

          </div>
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="dev-category">Category</label>
              <select type="text" name="dev-category" >
                {/* TODO */}
                <option value="select" disabled >Selecione a categoria</option>
                { devicesCategories.map((category) => {
                  return(
                    <option value={category.id}> {category.title}</option>
                  )

                })}

              </select>
            </div>
            
          </div>
          <h3 className="field-group-name title" >
            Dados de rede
          </h3>
          <div className="net-props input-group net-field">
            <div className="wrapper">
              <label htmlFor="macCable">MAC ethernet</label>
              <input 
                placeholder="dev-mac-cable" type="text" name="macCable" /> 
            </div>
            <div className="wrapper">
              <label htmlFor="ipCable">IP cabo</label>
              <input 
                placeholder="dev-ip-cable" type="text" name="ipCable" /> 
            </div>
          </div>
          <div className="net-props input-group">
            <div className="wrapper">
              <label htmlFor="macWireless">MAC Wi-Fi</label>
              <input 
                placeholder="dev-mac-Wireless" type="text" name="macWireless" /> 
            </div>
            <div className="wrapper">
              <label htmlFor="ipWireless">IP Wi-Fi</label>
              <input 
                placeholder="dev-ip-Wireless" type="text" name="ipWireless" /> 
            </div>
          </div>          
          <div className="wrapper">
            <label htmlFor="specification">Especificação</label>
            <textarea 
              placeholder="dev-specification" type="text" name="specification" /> 
          </div>
          
          
          {/* <input type="text" name="dev-mac-wireless" /> */}
          <button 
            id="submit-dev" 
          >Submit new device</button>
          
        </form>
      </StyledNewDeviceForm>
    </Modal>
  )
}