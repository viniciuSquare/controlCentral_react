import styled from "styled-components";

export const AppStyled = styled.div`

  height: 100vh;
  
  display: grid;

  &.sidebar-open {
    grid-template-columns: minmax(10rem, 220px) auto;
  }
  
  &.sidebar-closed {
    grid-template-columns: auto 1fr;
  }
  
  
  .content {
    display: grid;
    grid-template-rows: 60px calc(100vh - 60px);

    background-color: #EBF1FD;
    
    /* APPLY ONLY TO THE CONTENT CONTAINER */
    > div:nth-child(2) {
      padding: 1.5rem;
      column-gap: 1rem;

      background-color: #f2f2f2c2;
      box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.08);

      border-radius: 18px;
      margin-bottom: 6px;

    }

    /* TABLE GLOBAL STYLE */
    table {
      width: 100%;

      color: rgba(19, 19, 84, 0.6);

      thead, tr {
        display: grid;
        align-items: center;
        
        height: 2rem;
      
        border-radius: 8px;
    
        
        td, th {
          width: 100%;
          & + td, & + th{
            border-left: 1px solid rgba(19, 19, 84, 0.301);
          }
        }

      }

      thead {
        background: #e5e5e5;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }
      tr {
        margin: 0.3rem 0;
        text-align: center;
      }
    }
  }

  @media(max-width: 800px){
    
    font-size: 0.8rem;

    .content {
      display: flex;
      max-width: 100vw;
    }

  }


`