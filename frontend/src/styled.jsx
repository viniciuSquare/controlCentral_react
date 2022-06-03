import styled from "styled-components";

export const AppStyled = styled.div`

  height: 100vh;
  
  display: grid;

  --main-backgroud: #F5F6F8;
  /* --main-backgroud: rgba(171, 180, 211, 0.153); */
  /* --pane-background: #ffffff92; */
  --pane-background: #fff;
  --card-background: rgba(195, 209, 255, 0.324);

  --title: #203C6B;

  /* * {
    outline: 1px solid red;
  } */
  .left-side{
    display: none ;
  }

  &.sidebar-open {
    grid-template-columns: minmax(10rem, 220px) auto;
  }
  
  &.sidebar-closed {
    grid-template-columns: auto 1fr;
    #pageCategoriesList {
      display: none;
    }
  }

  .field-title {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    opacity: 0.5;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .normal-line-height {
    line-height: 1rem !important;
  }

  button {
    cursor: pointer;
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
      padding-top:0.5rem ;

      tr {
        .align-left {
          text-align: left;
          padding-left: 0.8rem;
        }
        .tools-td {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 1rem;
        }
      }

      thead, tr {
        display: grid;
        align-items: center;
      
        border-radius: 8px;
    
        td, th {
          height: 2.2rem;
          line-height: 2rem;
          text-align: center;

          width: 100%;
          & + td{
            border-left: 1px solid rgba(19, 19, 84, 0.106);
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