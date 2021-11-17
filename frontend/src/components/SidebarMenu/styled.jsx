import styled from "styled-components"

import { NavLink } from "react-router-dom"

export const SidebarMenuStyled = styled(NavLink)`
  display: flex;

  width: 100%;
  height: 3rem;
  margin: 4px 0;

  align-items: center;

  border-radius: 3px;
  color: #13138096;
  background-color: #D8E2FB;
  letter-spacing: 0.4px;

  line-height: 0;

  svg {
    margin: 0 1rem 0 1.25rem;
  }

  &.active {
    background: rgba(58, 111, 233, 0.7);
    color: #fbfcff;
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