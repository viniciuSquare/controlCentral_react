import { useEffect, useState } from 'react'

import {SidebarStyled} from  './styled'

import { SidebarMenu } from '../SidebarMenu'

import { useData } from '../../hooks/useData'
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

  const { 
    pageCategories,
    setPageCategories, getDevicesCategories } = useData()

  useEffect(()=>{
    console.log(pageCategories)
  },[pageCategories])

  const toggleVisibility = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return(
    <SidebarStyled
      className={ classNames( !isSidebarOpen && "hidden" ) }
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
          <SidebarMenu title="Home" icon={<BsHouseDoor size={iconSize}/>} path="/" />
          <SidebarMenu title="Employees" icon={<BsPeople size={iconSize}/>} path="/employees" />
          <SidebarMenu title="Ramals" icon={<BsTelephone size={iconSize}/>} path="/ramals" />
          <SidebarMenu title="Dispositivos" icon={<BsDisplay size={iconSize}/>} path="/dispositivos" />
          <SidebarMenu title="To-do" icon={<BsListCheck size={iconSize}/>} path="/tasks" />
          <SidebarMenu title="Locais e setores" icon={<BsSignpost size={iconSize}/>} path="locais"/>
        </nav>
        {/* <div className="pageCategoriesList">
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
        </div> */}

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