import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { AccountListStyled, AccountsPageStyled, StyledaccountsPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPencilSquare, BsPlus, BsThreeDots, BsTrash, BsTrash2Fill } from 'react-icons/bs';
import { BiDevices } from 'react-icons/bi';

import api from '../../api/api';

import { NewAccountModal } from './AccountFormModal';
import Modal from '../../components/Modal';
import { useSession } from '../../hooks/useSession';
import { DetailsContainer, StyledDataPage } from '../Base/styled';

export function Accounts() {
  // DATA WILL COME FROM BACKEND
  const [accounts , setAccounts] = useState([]);
  // const [accountsCategories , setAccountsCategories] = useState({});
  const {domainCategories, setDomainCategories} = useSession();
  
  // SET IF DATA CAME
  const [ isContentLoaded, setIsContentLoaded ] = useState();
  
  const [ selectedAccount, setSelectedAccount ] = useState({});

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)
  
  let pathData = useLocation()

  // FEED DATA FOR TABLES FROM BACKEND
  useEffect(async ()=>{
    
    console.log(pathData, "PATH DATA")
    if(accounts== undefined || !accounts?.length) {
      let {data: accountsList} = await api.get("/contas");
      setAccounts(accountsList);
      console.log(accountsList)
    }

    // let {data: domainCategories} = await api.get("/contas/categorias");
    // setDomainCategories(domainCategories);

    return () => setDomainCategories({})
  }, [])

  useEffect(()=>{
    if(!isContentLoaded)
      setIsContentLoaded(true);
        
  }, [selectedAccount, accounts])

  // LEFT SIDE FORM
  async function submitNewaccountCategory(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data.isNetDev = data.isNetDev == 'on' ? true : false

    let {data:creationResult} = await api.post("contas/categoria/", data);
    
    console.log(creationResult);
  }

  return (
    <StyledDataPage>
      <div className="left-side">
        <div className="container-head">
          <h3>Serviços</h3>
        </div>
        <div className="l-content">
        </div>
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title title">Contas</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add account</button>
            </div>
          </div>
          { isModalVisible //NEW account MODAL
              && <NewAccountModal accountsCategories={domainCategories}closer={toggleVisibility}/> 
          }
          
        </div>
        <div className="pane-content">
          <AccountList accounts={accounts} handleItemSelection={setSelectedAccount}/>
        </div>
        <AccountDetails account={selectedAccount} />
      </div>
      <div className="right-side">

      </div>
    </StyledDataPage>
  )
}

const AccountList= ({accounts, handleItemSelection})=> {
  console.log("lista recebida", accounts)

  function handleDataSelection(event){
    const {target} = event;

  }

  return(
    <table id="accounts-listage"  className="with-td-division">
      <thead>
        <th>Endereço de conta</th>
        <th>Serviço</th>
        <th>Opções</th>
        {/* ADD RELATED USAGE ICONS TH/TD */}
      </thead>
      <tbody>
        {
          accounts.length > 0 &&
            (
              accounts.map( account => {
                return (
                  <tr onClick={handleDataSelection} >
                    <td  >{account.address}</td>
                    <td  >{account.accountType?.name}</td>
                    <td  >
                      <div className="data-tools" >
                        <Link to={`/devices/account=${account.id}`} ><BiDevices size="24"/>{account.DeviceAccounts?.length || 0}</Link>
                        {
                          account.accountType.serviceControllerURL 
                            ? <Link to={{pathname: `${account.accountType.serviceControllerURL}`}} target="_blank" ><BsLink45Deg size="24" /></Link>
                            : <BsLink45Deg size="24" />
                        }
                        <button onClick={ ()=> {
                            <Modal>

                            </Modal>
                          } 

                        } ><BsPencilSquare size="24" /></button>
                        <button onClick={()=>handleItemSelection(account)} ><BsThreeDots size="24" /></button>
                      </div>
                    </td>
                  </tr>
                )
              } 
            )
          )
        }
      </tbody>
    </table>
  )
}

const AccountDetails = ({account}) => {
  console.log(account)
  return(
    <>
      <h1 className="field-title">Detalhes da selação</h1>
      <DetailsContainer className="account-details-container" >
        { account?.id
          ? (
            <>
              <div id="data-details">
                <div className="head">
                  <div className="title">
                    <h3>Uso</h3>
                    <p>{account.accountType?.description}</p>
                  </div>
                  <div className="tools">
                    <button>
                      <BsPencilSquare size="32" />
                    </button>
                    <button>
                      <BsTrash2Fill size="32" />
                    </button>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="align-left" >
                        <h4>Usuário</h4>
                      </td>
                      <td className="align-left" >
                        <p>Vinícius Quadrado</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Serviço da conta</h4>
                      </td>
                      <td className="align-left" >
                        <p>{account.accountType?.name||"Não definido"}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>                
              </div>
            </>
          )
          : (
            <h1 className="field-title warning">Selecione item para ver detalhes</h1>
          )
      }
        
      </DetailsContainer>
    </>
  )

}