import { useEffect, useState } from 'react'

import {SidebarStyled} from  './styled'

import { SidebarMenu } from '../SidebarMenu'

import { useSession } from '../../hooks/useSession'

import classNames from 'classnames'

import homeIcon from '../../assets/Icon/home.svg'
import menuIcon from '../../assets/Icon/menu.svg'
import userIcon from '../../assets/Icon/user.svg'
import todoIcon from '../../assets/Icon/todo.svg'
import phoneIcon from '../../assets/Icon/phone.svg'
import devicesIcon from '../../assets/Icon/devices-icon.svg'

import { BrowserRouter } from 'react-router-dom'


export function Sidebar() {
  const [ isHidden, setIsHidden ] = useState(false);
  const { 
    pageCategories,
    setPageCategories, getDevicesCategories } = useSession()

  useEffect(()=>{
    setPageCategories(getDevicesCategories());
  },[])

  useEffect(()=>{
    console.log(pageCategories)
  },[pageCategories])

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

        <BrowserRouter>
          <nav>
            <SidebarMenu title="Home" icon={homeIcon} path="/" />
            <SidebarMenu title="Employees" icon={userIcon} path="/employees" />
            <SidebarMenu title="Ramals" icon={phoneIcon} path="/ramals" />
            <SidebarMenu title="To-do" icon={todoIcon} path="/tasks" />
            <SidebarMenu title="Dispositivos" icon={devicesIcon} path="/dispositivos" />
          </nav>
        </BrowserRouter>
        <div className="pageCategoriesList">
          {
            pageCategories.length > 0 ? pageCategories.map( category => {
              return (
                <div 
                  style={{display:"flex"}}
                  className="pageCategoryLink"
                >
                  <h4>{category[0]}</h4>
                  <p>{category}</p>
                </div>
              )
            }) : null
          }
        </div>

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