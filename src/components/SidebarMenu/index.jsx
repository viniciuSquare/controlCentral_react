import { SidebarMenuStyled } from './styled'

export function SidebarMenu({ 
  title,
  icon,
  path,
  active = false 
}) {
  return(
    <SidebarMenuStyled 
      to={path} 
      className={active && "active"} 
    >
      <img 
        src={icon} 
        alt={title} 
        className="menu-icon"
      />
      <h3 className="menu-title" >{title}</h3>
    </SidebarMenuStyled>
  )
}