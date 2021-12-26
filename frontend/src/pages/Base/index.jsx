import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { DetailsContainer, StyledDataPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPencilSquare, BsPlus, BsThreeDots, BsTrash, BsTrash2Fill } from 'react-icons/bs';

import api from '../../api/api';

import Modal from '../../components/Modal';
import { useSession } from '../../hooks/useSession';
import { ItensList } from './Table';

/**
 * PAGE TITLE
 * TABLE HEADER
 * TABLE DATA
 * */ 

export default function Base({
  pageTitle,
  itensTable
}) {
  // DATA WILL COME FROM BACKEND
  const [data , setData] = useState({});
  const {navCategories, setNavCategories} = useSession();
  
  // SET IF DATA CAME
  const [ isContentLoaded, setIsContentLoaded ] = useState();
  
  const [ selectedData, setSelectedData ] = useState({});

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);
  
  let pathData = useLocation()


  // FEED DATA FOR TABLES FROM BACKEND
  useEffect(async ()=>{
    
    console.log(pathData, "PATH DATA")
  
    let {data: dataList} = await api.get("/dispositivos");
    setData(dataList);

    let {data: navCategories} = await api.get("/dispositivos/categorias");
    setNavCategories(navCategories);

    return () => setNavCategories({})
  }, [])

  useEffect(()=>{
    if(!isContentLoaded)
      setIsContentLoaded(true);
        
  }, [selectedData])

  // LEFT SIDE FORM
  async function submitNewdataCategory(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data.isNetDev = data.isNetDev == 'on' ? true : false

    let {data:creationResult} = await api.post("dispositivos/categoria/", data);
    
    console.log(creationResult);
  }

  return (
    <StyledDataPage>
      <div className="left-side">
        <div className="l-content">
          {/*  */}
        </div>
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title title">{pageTitle}</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add data</button>
            </div>
          </div>
          {/* { isModalVisible //NEW data MODAL
              && <NewdataModal DataCategories={navCategories}closer={toggleVisibility}/> 
          } */}
          
        </div>
        <div className="pane-content">
          <ItensList data={selectedData} handleItemSelection={setSelectedData}>
            <itensTable/>
          </ItensList>
        </div>
        <ItemDetails data={selectedData} />
      </div>
      <div className="right-side">

      </div>
    </StyledDataPage>
  )
}

const ItemDetails = ({data}) => {
  console.log(data)
  return(
    <>
      <h1 className="field-title">Detalhes da selação</h1>
      <DetailsContainer className="data-details-container" >
        { data.id
          ? (
            <>
              <div id="data-details">
                <div className="head">
                  <div className="title">
                    <p>Nome</p>
                    <h3>{data.alias}</h3>
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
                        <h4>Endereço IP</h4>
                      </td>
                      <td className="align-left" >
                        <p>{data.ipCable||data.ipWireless||"Não definido"}</p>
                        
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Tipo dispositivo</h4>
                      </td>
                      <td className="align-left" >
                        <p>{data.category?.title||"Não definido"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Local/Setor</h4>
                      </td>
                      <td className="align-left" >
                        <p>Sala de TI</p>
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