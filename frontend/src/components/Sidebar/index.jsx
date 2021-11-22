import tayayaLogo from '../../assets/tayaya.png'
import { SidebarStyled } from  './styled'

import { SidebarMenu } from '../SidebarMenu'

import { useSession } from '../../hooks/useSession'

import classNames from 'classnames'

import menuIcon from '../../assets/Icon/menu.svg'

import { 
  BsHouseDoor, 
  BsListCheck,
  BsDisplay,
  BsTelephone,
  BsPeople,
  BsSignpost
} from 'react-icons/bs'

export function Sidebar() {
  const iconSize = 28;

  const {isSidebarOpen, setIsSidebarOpen} = useSession();

  const toggleVisibility = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return(
    <SidebarStyled
      className={ classNames( !isSidebarOpen && "hidden" ) }
    >
      <div>
        <div id="brand-img">
          <img 
            src={tayayaLogo} 
            alt="Tayaya Logo" 
            className="logo" 
          />
          <h1 className="brand-title menu-title">Tayaya</h1>
        </div>
        <button 
          id="menu-title" 
          className="title menu-title"
          onClick={toggleVisibility}
        >
          <img src={menuIcon} className="menu-icon" alt="" />
          <h2>menu</h2>
        </button>

        <nav>
          <SidebarMenu title="Home" icon={<BsHouseDoor size={iconSize}/>} path="/" />
          <SidebarMenu title="Employees" icon={<BsPeople size={iconSize}/>} path="/funcionarios" />
          <SidebarMenu title="Ramals" icon={<BsTelephone size={iconSize}/>} path="/ramais" />
          <SidebarMenu title="Dispositivos" icon={<BsDisplay size={iconSize}/>} path="/dispositivos" />
          <SidebarMenu title="To-do" icon={<BsListCheck size={iconSize}/>} path="/tarefas" />
          <SidebarMenu title="Locais e setores" icon={<BsSignpost size={iconSize}/>} path="locais"/>
        </nav>
      </div>

      <button 
        id="hide-sidemenu-btn"
        onClick={toggleVisibility}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7L6 12L11 17" stroke="#F9F9F9" strokeLinecap="round"/>
          <path d="M17 7L12 12L17 17" stroke="#F9F9F9" strokeLinecap="round"/>
        </svg>
        <span className="menu-title">Esconder barra lateral</span>
      </button>

    </SidebarStyled>
  )
}