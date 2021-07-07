import { SidebarMenuStyled } from './styled'

export function SidebarMenu({ title, icon, path }) {
  return(
    <SidebarMenuStyled to={path} >
      <img 
        src={icon} 
        alt={title} 
        className="sidebarMenu-icon"
      />
      <h3>{title}</h3>
    </SidebarMenuStyled>
  )
}