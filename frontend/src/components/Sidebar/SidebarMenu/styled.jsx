import styled from "styled-components"

export const SidebarMenuStyled = styled.div`

  .menu-item {
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

export const CategoriesNavStyled = styled.ul`
  &#pageCategoriesList {
    margin-left: 2rem;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    
    li {
      padding: 0 1.3rem;

      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      height: 2.3rem;
    }
  }
`
  
