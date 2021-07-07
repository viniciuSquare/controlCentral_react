import {SidebarStyled} from  './styled'

import { SidebarMenu } from '../SidebarMenu'

import logoImg from '../../assets/tayaya.png'
import homeIcon from '../../assets/home-icon.svg'



export function Sidebar() {
  return(
    <SidebarStyled>
      <div id="brand">
        <img 
          src={logoImg} 
          alt="Tayaya Logo" 
          className="logo" 
        />
        <h1 className="brand-title">Tayaya</h1>
      </div>
      <nav>
        <SidebarMenu title="Home" icon={homeIcon} path="/" />
      </nav>
    </SidebarStyled>
  )
}