import { useEffect, useState } from 'react';
import api from '../../../api/api';
import { Input } from '../../../components/FormContent';

import Modal from '../../../components/Modal';

import { StyledNewDeviceForm } from '../styled';

export const NewDeviceModal = ({devicesCategories, deviceToEdit, closer}) => {
  // HANDLE FORM
  const [formInputs, setFormInputs] = useState({});
  const [devCode, setDevCode] = useState("")
  const [ isNetDev, setIsNetDev ] = useState();

  const [ isNewCategoryFormVisible, setIsNewCategoryFormVisible ] = useState();
  const toggleNewCategoryFormVisibility = () => setIsNewCategoryFormVisible(!isNewCategoryFormVisible);
    
  const [device, setDevice] = useState({});

  useEffect(()=>{
    if(!deviceToEdit) {
      setDevice({});
    } else {
      setDevice(deviceToEdit);
    }
  },[])

  useEffect(() => {
    if(formInputs["dev-category-select"] == "new")
      setIsNewCategoryFormVisible(true)
    else 
      setIsNewCategoryFormVisible(false)
    
    formInputs["isNetDev"] == 'true' 
      ? setIsNetDev(true)
      : setIsNetDev(false)

  }, [formInputs])

  const handleDevInputChange = event => {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormInputs({ ...formInputs, [fieldName] : fieldValue })
    
    console.log(formInputs)
    // TODO - DEV CODE CREATION
    let createDeviceCode = [
      formInputs["dev-ip-cable"]?.length ,
      formInputs["dev-model"],
      formInputs["dev-category-select"]
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

    if(data["dev-category-select"] == "new") {
      data.category = {
        title: data.title,
        isSource: data.isSource || null
      }
    } else 
      data.category = data["dev-category-select"]

    delete data["dev-category-select"];
    
    console.log(data);

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
          {
            device.id 
              ? <input type="hidden" value={device.id}  />
              : null
          }
          <Input value={device.alias} name="alias" label="Título" placeholder="dev-title" />
          
          <div className="input-group">
            <Input value={device.serviceTag} name="serviceTag" label="Modelo" placeholder="dev-model" /> 
            <Input value={device.cpu} name="cpu" label="Processador" />
          </div>

          <div name="dev" className="wrapper" >
            <label htmlFor="dev-category-select">Category</label>
            <select type="text" name="dev-category-select" >
              {/* TODO */}
              <option value="" >Selecione a categoria</option>
              { devicesCategories.map((category) => {
                return(
                  <option value={category.id}> {category.title}</option>
                )})
              }
              <option value="new" >Criar nova categoria</option>
            </select>
          </div>
          { isNewCategoryFormVisible &&
            <DeviceCategoryForm/>
          }

          { isNetDev &&
            <NetDeviceForm/>
          }
          
          {/* <input type="text" name="dev-mac-wireless" /> */}
          <button 
            id="submit-dev" 
          >Submit new device</button>
          
        </form>
      </StyledNewDeviceForm>
    </Modal>
  )
}

const DeviceCategoryForm = () => {
  return(
    <>
      <h3 className="field-group-name title">
        Criar categoria de dispositivo
      </h3>
      <div className="input-group">
        <Input label="Nome da categoria" name="title"/>
        <div className="wrapper">
          <label htmlFor="isNetDev">Disposivo conectado à rede</label>
          <select name="isNetDev" id="">
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

        </div>
      </div>
    </>
  )
}

const NetDeviceForm = () => {
  return(
    <>
      <h3 className="field-group-name title" >
        Dados de rede
      </h3>
      <div className="net-props input-group net-field">
        <Input name="macCable" label="MAC ethernet" placeholder="dev-mac-cable"/>
        <Input name="ipCable" label="IP cabo" placeholder="dev-ip-cable"/>
      </div>
      <div className="net-props input-group">
        <Input name="macWireless" label="MAC Wi-Fi" placeholder="dev-mac-Wireless"/> 
        <Input name="ipWireless" label="IP Wi-Fi" placeholder="dev-ip-Wireless" /> 
      </div>          
      <div className="wrapper">
        <label htmlFor="specification">Especificação</label>
        <textarea 
          placeholder="dev-specification" type="text" name="specification" /> 
      </div>
    </>
  )
}