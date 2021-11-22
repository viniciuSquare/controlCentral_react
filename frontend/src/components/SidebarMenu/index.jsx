import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import { SidebarMenuStyled } from './styled'

export function SidebarMenu({ 
  title,
  icon,
  path
  // active = false 
}) {
  const currentPath = useLocation();
  const [isActive, setIsActive] = useState(false);
  
  const { navCategories } = useSession();
  console.log(navCategories)

  useEffect(()=>{
    if(currentPath.pathname == path) {
      !isActive ?? setIsActive(true);
    }

  }, [])
  

  return(
    <>
      <SidebarMenuStyled>
        <NavLink className="menu-item" exact to={path}>
          {icon}
          <h3 className="menu-title" >{title}</h3>
        </NavLink>
      </SidebarMenuStyled>
      { 
        isActive &&
          navCategories.map((category)=>{
            return(
              <p>Hi</p>
            )
          })
      }

    </>

  )
}