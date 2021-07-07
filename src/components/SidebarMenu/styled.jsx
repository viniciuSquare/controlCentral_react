import styled from "styled-components"

import { Link } from "react-router-dom"

export const SidebarMenuStyled = styled(Link)`
  display: flex;

  width: 95%;
  height: 3rem;
  margin: 0 auto;

  align-items: center;

  /* background-color: aqua; */
  color: white;
  
  .sidebarMenu-icon {
    margin: 0 1rem;
  }
`