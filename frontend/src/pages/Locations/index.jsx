import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom'

import { LocationsPageStyled } from './styled'

import { BsNodePlus, BsPlus } from 'react-icons/bs'
import api from '../../api/api';

export function LocationsPage( ) {

  const [locations, setLocations] = useState([]);

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);

  function submitNewOperationalCategory(){}

  useEffect(async()=>{
    let {data: locationsList} = await api.get('locais');
    setLocations(locationsList);
    
    // let {data: locationsList} = await api.get('locais');
    // setLocations(locationsList);

  },[])

  return(
    <LocationsPageStyled>
      <div className="left-side">
        <div className="container-head">
          <h3 className="title">
            Categorias
          </h3>
          {/* <button><BsPlus size="28" color="gray"/></button> */}
        </div>
        <div className="l-content">
          <ul className="pageCategoriesList">
            {
              locations.length > 0 
                ? locations.map( category => {
                  return (
                    <li key={category.id} className="pageCategoryLink">
                      <NavLink to={`/dispositivos/${category.title}`} >{category.operationalCategory}</NavLink>
                      <BsNodePlus size="24"/> 
                    </li>
                  )
                }) 
                : <li>Nada a ser exibido</li>
            }
          </ul>
          <div className="left-side-menu">
            <button onClick={toggleNewCategoryModalVisibility} id="toggle-new-device-modal" >
              <strong>Nova categoria</strong>
              <BsPlus/>
            </button>
            {
              isNewCategoryModalVisible &&
                <form onSubmit={submitNewOperationalCategory} className="new-category-modal  " >
                  <div>
                    <input 
                      // onChange={handleInputChange} 
                      id="new-category-title" 
                      type="text" 
                      placeholder="Título da categoria..." 
                      name="title"
                    />
                    <div className="input-group align-horizontal spaced">
                      <label htmlFor="isNetDev">Dispositivo de rede?</label>
                      <input 
                        // onChange={handleInputChange} 
                        type="checkbox" 
                        name="isNetDev"
                      />
                    </div>
                  </div>
                  <button type="submit">
                    <BsNodePlus size="24"/>
                  </button>
                </form>

            }
          </div>
        </div>
      </div>
      <div className="container-pane">
        <table>
          <thead>
            <th>Local</th>
            <th>Categoria</th>
            <th>Mais</th>
          </thead>
          <tbody></tbody>
        </table>

      </div>
      <div className="right-side"></div>
      
    </LocationsPageStyled>
  )

}