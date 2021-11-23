import { useEffect, useState } from 'react';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';

import api from '../../api/api';
import { useSession } from '../../hooks/useSession';

import { LocationsPageStyled } from './styled'

export function LocationsPage( ) {

  const [locations, setLocations] = useState([]);

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);

  function submitNewOperationalCategory(){}

  const { navCategories, setNavCategories } = useSession();

  useEffect(async()=>{
    let {data: locationsList} = await api.get('locais');
    setLocations(locationsList);
    console.log(locationsList)
    
    return ()=> setNavCategories({})
  },[])
  
  // FILTER LOCATIONS CATEGORY
  useEffect(()=>{
    let categories = []
    locations?.forEach( category => {
      if(category.operationalCategory != null)
        categories.push(category.operationalCategory)
    })
    setNavCategories(categories)

  },[locations])
  const iconSize = 18
  return(
    <LocationsPageStyled>
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
        
        <table>
          <thead>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Mais</th>
          </thead>
          <tbody>
            {
              locations.length > 0 &&
                (
                  locations.map( location => {
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

      </div>
      <div className="right-side"></div>
      
    </LocationsPageStyled>
  )

}