import styled from "styled-components"

import { NavLink } from "react-router-dom"

export const SidebarMenuStyled = styled(NavLink)`
  display: flex;

  width: 100%;
  height: 3rem;
  margin: .125rem auto;

  align-items: center;

  background: #C8D4FF;
  border-radius: 3px;
  color: white;

  line-height: 0;

  &.hidden {

  }

  img {
    max-width: 1.5rem;
    margin: 0;
    padding: 0;

  }  
  .menu-icon {
    margin: 0 1.6rem;
  }

  &.active {
    background: #2a50dcab;
    position: relative;
    
    &::before {
      content: '';
      width: 0.4rem;
      height: 100%;

      position: absolute;
      background: #2a51dc91;
      border-radius: 3px;
    }

     
  }
`