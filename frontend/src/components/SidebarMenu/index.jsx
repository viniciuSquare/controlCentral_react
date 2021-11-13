import { SidebarMenuStyled } from './styled'

export function SidebarMenu({ 
  title,
  icon,
  path,
  // active = false 
}) {
  return(
    <SidebarMenuStyled 
      exact
      to={path} 
      // className={active && "active"} 
    >
      {icon}
      <h3 className="menu-title" >{title}</h3>
    </SidebarMenuStyled>
  )
}