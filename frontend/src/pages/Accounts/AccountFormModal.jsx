import { useEffect, useState } from 'react';
import api from '../../api/api';

import Modal from '../../components/Modal';

import { AccountFormModalStyled } from './styled';

export const NewAccountModal = ({accountToEdit, closer}) => {
  // HANDLE FORM
  const [formInputs, setFormInputs] = useState({});
  const [devCode, setDevCode] = useState("");

  const [ isNewCategoryFormVisible, setIsNewCategoryFormVisible ] = useState();
  const toggleNewCategoryFormVisibility = () => setIsNewCategoryFormVisible(!isNewCategoryFormVisible);
  
  const [account, setaccount] = useState({});
  
  useEffect(()=>{ // SET IF THERE IS AN ACCOUNT TO EDIT ON MODAL
    if(!accountToEdit) {
      setaccount({});
    } else {
      setaccount(account);
    }
  },[])
  
  useEffect(()=>{
    if(formInputs.service == "new") 
      setIsNewCategoryFormVisible(true)
    else
      setIsNewCategoryFormVisible(false)

    console.log(formInputs)
  },[formInputs])

  const handleDevInputChange = event => {
    let fieldName = event.target.name == "account-type" ? "accountType" : event.target.name;
    let fieldValue = event.target.value
    
    setFormInputs({ ...formInputs, [fieldName] : fieldValue })

  }

  // FORM SUBMITTION
  async function submitAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    
    if(data.service == "new") {
      data.service = {
        name: data["new-service-name"],
        description: data["new-service-description"]
      }
    }
    delete data["new-service-name"];
    delete data["new-service-description"];

    // console.log(data);

    let {data:creationResult, status} = await api.post("contas/", data);
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
      <AccountFormModalStyled>
        <div className="modal-head">
          <h1 className="modal-title" > Nova conta</h1>
          <h2 id="dev-code">#{devCode}</h2>
        </div>
        <form onChange={handleDevInputChange} onSubmit={submitAccount}>
          <h3 className="field-group-name title" >
            Dados da conta
          </h3>

          <div className="wrapper">
            <label htmlFor="address">Endereço de conta</label>
            <input 
              placeholder="dev-title" type="text" name="address" /> 
          </div>
          {/* <div className="wrapper">
            <label htmlFor="user">Usuário</label>
            <input 
              placeholder="Usuário" type="text" name="user" /> 
          </div> */}
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="service">Serviço</label>
              <select type="text" name="service" >
                {/* TODO */}
                <option value="select disabled" >Selecione a categoria</option>

                <option value="new" >Criar categoria</option>
              </select>
            </div>
            
          </div>    
          { isNewCategoryFormVisible &&
              <AccountTypeForm/>

          }
          
          <button 
            id="submit-account" 
          >Submit new account</button>
          
        </form>
      </AccountFormModalStyled>
    </Modal>
  )
}

const AccountTypeForm = () => {
  return (
    <>
      <h3 className="field-group-name title" >
        Criar tipo de serviço
      </h3>
      <div className="wrapper">
        <label htmlFor="new-service-name">Nome do seriço</label>
        <input type="text" name="new-service-name" id="service-name" />
      </div>
      <div className="wrapper">
        <label htmlFor="new-service-description">Descrição</label>
        <textarea 
          name="new-service-description" 
          cols="30" rows="7" 
          placeholder="Descriva o serviço e principais recurtos"
        />
      </div>

    </>
  )
}