import { useEffect, useState } from 'react';
import api from '../../../api/api';
import { Input } from '../../../components/FormContent';

import Modal from '../../../components/Modal';

import { StyledNewDeviceForm } from '../styled';

export const NewDeviceModal = ({devicesCategories, deviceToEdit, closer}) => {
  // HANDLE FORM
  const [formInputs, setFormInputs] = useState({});
  const [device, setDevice] = useState({});

  const [ isNetDev, setIsNetDev ] = useState();

  const [ isNewCategoryFormVisible, setIsNewCategoryFormVisible ] = useState();

  useEffect(()=>{
    if(!deviceToEdit) {
      setDevice({});
    } else {
      setDevice(deviceToEdit);
    }
  },[])

  const handleDevInputChange = event => {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormInputs({ ...formInputs, [fieldName] : fieldValue })

    // NEW CATEGORY HANDLER
    if(formInputs["dev-category-select"] == "new") {
      setIsNewCategoryFormVisible(true)
      
      formInputs["isNetDev"] == 'true' 
        ? setIsNetDev(true)
        : setIsNetDev(false)
    }
    else 
      setIsNewCategoryFormVisible(false)

    if( formInputs["dev-category-select"] && formInputs["dev-category-select"] != "new" ) {
      const { isNetDev: isNetworkDevice } = devicesCategories
        .filter(category => category.id == formInputs["dev-category-select"])[0];
        
      setIsNetDev(isNetworkDevice);
    }

    console.log(formInputs)
  }

  // FORM SUBMITTION
  async function handleSubmitDevice(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    
    console.log("RAW FORM OBJ", data);

    // Include device_category creation 
    if(data["dev-category-select"] == "new") {
      data.category = {
        title: data.categoryTitle,
        isNetDev: data.isNetDev || null
      }
    } else 
      data.category = data["dev-category-select"]

    delete data["dev-category-select"];
    delete data.isNetDev;
    delete data.categoryTitle;
    //
    console.log("FORMATTED", data);
    
    let {data:creationResult, status} = await api.post("dispositivos/", data);

    if(status == 200 || status == 201) {
      closer();
    }
    
    console.log("CREATION RESULT", creationResult);
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
          {/* <h2 id="dev-code">#{devCode}</h2> */}
        </div>
        <form onChange={handleDevInputChange} onSubmit={handleSubmitDevice}>
          <h3 className="field-group-name title" >
            Dados do dispositivo
          </h3>
          {
            device.id 
              ? <input type="hidden" value={device.id}  />
              : null
          }
          
          <div className="input-group">
            <Input value={device.hostname} name="alias" label="Hostname" placeholder="dev-title" />
            <Input value={device.inventoryCode} name="inventoryCode" label="Cod. Invent??rio" />
          </div>
          <div className="input-group">
            <Input value={device.brand} name="brand" label="Marca" /> 
            <Input value={device.model} name="model" label="Modelo" />
          </div>
          
          <div className="input-group">
            <Input value={device.serviceTag} name="serviceTag" label="Service TAG" /> 
            <Input value={device.cpu} name="cpu" label="Processador" />
          </div>

          <div name="dev" className="wrapper" >
            <label htmlFor="dev-category-select">Category</label>

            <select type="text" name="dev-category-select" value={device.category?.id}>
              {/* TODO */}
              <option value="" >Selecione a categoria</option>
              { devicesCategories?.map((category) => {
                return(
                  <option key={category.id} value={category.id}>{category.title}</option>
                )})
              }
              <option value="new" >Criar nova categoria</option>
            </select>
          </div>
          { isNewCategoryFormVisible &&
            <DeviceCategoryForm/>
          }

          { (device?.category?.isNetDev || isNetDev) &&
            <DeviceNetworkForm device={device}/>
          }
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
        <Input label="Nome da categoria" name="categoryTitle"/>
        <div className="wrapper">
          <label htmlFor="isNetDev">Disposivo conectado ?? rede</label>
          <select name="isNetDev" id="">
            <option value="false">N??o</option>
            <option value="true">Sim</option>
          </select>

        </div>
      </div>
    </>
  )
}

const DeviceNetworkForm = ({device}) => {
  return(
    <>
      <h3 className="field-group-name title" >
        Dados de rede
      </h3>
      <div className="net-props input-group net-field">
        <Input name="macCable" value={device.macCable} label="MAC ethernet" placeholder="dev-mac-cable"/>
        <Input name="ipCable" value={device.ipCable} label="IP cabo" placeholder="dev-ip-cable"/>
      </div>
      <div className="net-props input-group">
        <Input name="macWireless" value={device.macWireless} label="MAC Wi-Fi" placeholder="dev-mac-Wireless"/> 
        <Input name="ipWireless" value={device.ipWireless} label="IP Wi-Fi" placeholder="dev-ip-Wireless" /> 
      </div>          
      <div className="wrapper">
        <label htmlFor="specification">Especifica????o</label>
        <textarea 
          placeholder="dev-specification" type="text" value={device.specification} name="specification" /> 
      </div>
    </>
  )
}