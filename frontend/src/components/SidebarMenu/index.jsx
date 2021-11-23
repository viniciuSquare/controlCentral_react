import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import { CategoriesNavStyled, SidebarMenuStyled } from './styled'

export function SidebarMenu({ 
  title,
  icon,
  path
}) {
  const {pathname} = useLocation();

  const [isActive, setIsActive] = useState(path.replace(/\//g, "")==pathname.replace(/\//g, ""));
  
  const { navCategories } = useSession();
  // console.log(path, isActive, navCategories, pathname)

  return(
    <>
      <SidebarMenuStyled>
        <NavLink className="menu-item" exact to={path} activeClassName="active">
          {icon}
          <h3 className="menu-title" >{title}</h3>
        </NavLink>
      </SidebarMenuStyled>
      { 
        isActive &&
          <CategoriesNav categories={navCategories}/>   
      }
    </>

  )
}

const CategoriesNav=({categories})=>{
  console.log(categories)
  return(
    <CategoriesNavStyled id="pageCategoriesList">
      { 
        categories.length > 0 &&
          categories?.map( category => {
            return (
              <li key={category.id} className="pageCategoryLink">
                <NavLink to={`/dispositivos/${category.title}`} >{category.title}</NavLink>
                {/* <BsNodePlus size="18"/>  */}
              </li>
            )
          })
      }
    </CategoriesNavStyled>
  )
}