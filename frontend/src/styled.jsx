import styled from "styled-components";

export const AppStyled = styled.div`
  * {
    font-family: 'Roboto', sans-serif;

    text-decoration: none;
    --main-backgroud: #F5F6F8;
    /* --main-backgroud: rgba(171, 180, 211, 0.153); */
    /* --pane-background: #ffffff92; */
    --pane-background: #fff;
    --card-background: rgba(195, 209, 255, 0.324);

    --title: #203C6B;

  }

  button {
    cursor: pointer;
    
    background: transparent;
    border: none;

  }

  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
/*   
  aside{
    position: absolute;
    left: 0;
    top: 0;

    height: 100vh;
    z-index: 1;
    width: 15%;

  } */
  &.sidebar-open {
    .content {
      grid-template-columns: minmax(10rem, 220px) auto;
    }
  }
  
  &.sidebar-closed {
    .content {
      grid-template-columns: 4.4rem auto;
    }
  }
  
  .content {
    display: grid;
    
    max-height: 100vh;
    max-width: 100vw;
    
    /* APPLY ONLY TO THE CONTENT CONTAINER */
    > div:nth-child(2) {

      /* width: 90%; */
      margin: 0 auto;

      padding: 1.5rem;
      column-gap: 1rem;

    }
    background-color: var(--main-backgroud);

    /* SECTION LAYOUT */
    .page-title {
      font-size: 1.8rem;
    }

    /* TABLE GLOBAL STYLE */
    table {
      width: 100%;

      color: rgba(19, 19, 84, 0.6);

      
      thead, tr {
        display: grid;
        align-items: center;

        grid-template-columns: 2fr 2fr 2fr 1.5fr 1.5fr;

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