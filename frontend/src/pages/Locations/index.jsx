import { useEffect, useState } from 'react';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';

import api from '../../api/api';
import { useSession } from '../../hooks/useSession';
import { StyledDataPage } from '../Base/styled';

import { LocationsPageStyled } from './styled'

export function LocationsPage( ) {

  const [locations, setLocations] = useState([]);

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);

  function submitNewOperationalCategory(){}

  const { domainCategories, setDomainCategories } = useSession();

  useEffect(async()=>{
    let {data: locationsList} = await api.get('locais');
    setLocations(locationsList);
    console.log(locationsList)
    
    return ()=> setDomainCategories({})
  },[])
  
  // FILTER LOCATIONS CATEGORY
  useEffect(()=>{
    let categories = []
    locations?.forEach( category => {
      if(category.operationalCategory != null)
        categories.push(category.operationalCategory)
    })
    setDomainCategories(categories)

  },[locations])
  return(
    <StyledDataPage>
      <div className="left-side">
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title">Locais / Setores</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add device</button>
            </div>  
          </div>
        </div>
        <div className="pane-content">
          <LocationsList data={locations}/>
        </div>
      </div>
      <div className="right-side"></div>
      
    </StyledDataPage>
  )

}

const LocationsList = ({data})=> {
  const iconSize = 18

  return (
    <table id="locations-listage">
      <thead>
        <th>Nome</th>
        <th>Categoria</th>
        <th>Descrição</th>
        <th>Mais</th>
      </thead>
      <tbody>
        {
          data.length > 0 &&
            (
              data.map( location => {
                return(
                  <tr>
                    <td>{location.title}</td>
                    <td>{location.operationalCategory?.title || "Não definido"}</td>
                    <td className="align-left normal-line-height" >{location.description}</td>
                    <td className="tools-td">
                      <button>
                        <BsThreeDots size={iconSize} />
                      </button>
                      <button>
                        <BsPencilSquare size={iconSize} />
                      </button>
                    </td>
                  </tr>
                )
              })
            )
        }
      </tbody>
    </table>
  )
}