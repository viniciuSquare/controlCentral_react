import { useState } from 'react'

import {SidebarStyled} from  './styled'

import { SidebarMenu } from '../SidebarMenu'

import classNames from 'classnames'

import homeIcon from '../../assets/icon/home.svg'
import menuIcon from '../../assets/icon/menu.svg'
import userIcon from '../../assets/icon/user.svg'
import todoIcon from '../../assets/icon/todo.svg'
import phoneIcon from '../../assets/icon/phone.svg'


export function Sidebar() {
  const [ isHidden, setIsHidden ] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden)
  }

  return(
    <SidebarStyled
      className={ classNames( isHidden && "hidden" ) }
    >
      <div>
        <button 
          id="menu-title" 
          className="title menu-title"
          onClick={toggleVisibility}
        >
          <img src={menuIcon} className="menu-icon" alt="" />
          <h2>menu</h2>
        </button>

        <nav>
          <SidebarMenu active title="Home" icon={homeIcon} path="/" />
          <SidebarMenu title="Employees" icon={userIcon} path="/employees" />
          <SidebarMenu title="Ramals" icon={phoneIcon} path="/ramals" />
          <SidebarMenu title="To-do" icon={todoIcon} path="/tasks" />
        </nav>
      </div>

      <button 
        id="hide-sidemenu-btn"
        onClick={toggleVisibility}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7L6 12L11 17" stroke="#F9F9F9" stroke-linecap="round"/>
          <path d="M17 7L12 12L17 17" stroke="#F9F9F9" stroke-linecap="round"/>
        </svg>
        <span className="menu-title">Esconder barra lateral</span>
      </button>

    </SidebarStyled>
  )
}