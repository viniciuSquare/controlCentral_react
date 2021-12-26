import styled from "styled-components";

export const StyledDataPage = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;
  
  width: 100%;
  
  /* SYSTEM COMPONENTS DEFAULTS */
  .warning {
    font-size: 1.2rem
  }
  /* GENERAL SETTINGS */
  .align-horizontal {
    display: flex;
    align-items: center;

    &.spaced {
      justify-content: space-between;

    }
  }
  .left-side {
    padding-top: 1rem;
    .container-head {
      display: flex;
      justify-content: space-between;
      /* margin-right: 1.5rem; */
    }

    .l-content {
      display: flex;
      flex-direction: column;
      width: 95%;

      .left-side-menu{
        padding-right: 0.5rem;

        input#new-category-title, button#toggle-new-data-modal {
          width: 100%;
        }

        button#toggle-new-data-modal {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .new-category-modal {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          
          margin: 1rem 0;
          
          div {
            width: 100%;
          }

          input {
            padding-left: 0.5rem;
            height: 1.6rem;
          }
        }
      }
    }
  }

  .field-group-name {
    opacity: 0.6;
    margin-top: 1rem;
  }

  .container-pane {
    display: grid;
    grid-template-rows: 4rem auto 2rem 30%;

    .pane-content {
      margin-bottom: 1.5rem;
    }

    /* .field-title {  DEFINED AT GLOBAL SCOPE
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      opacity: 0.5;
    } */
  }

  .right-side {
    /* background-color: lightcoral; */
  }

  /* MAIN CONTENT */
  .title-n-tools {
    display: flex;
    justify-content: space-between;

    padding: 8px 0;
    .tools {
      display: flex;
      gap: 2rem;
    }
  }
  .data-tools {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
  }

`

export const DetailsContainer = styled.div`
  padding: 1rem;

  border-radius: 12px;
  background-color: #E0EAFC;

  #data-details{
    display: grid;
    grid-template-columns: 20% auto 3rem;

    /* background-color: red; */
    height: 80%;

    table, td, th {
      border: none !important;
    }
    
    .head {
      /* background-color: blue; */
      height: 100%;
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 0.6rem;
        opacity: 0.7;
      }
      .tools {
        margin-top: auto;
        /* padding-left: 1rem; */
        width: 80%;
        display: flex;

        gap: 0.6rem;

        svg{
          opacity: 0.6;
        }
        svg:hover {
          opacity: 1;
        }
      }
    }

  }

  table {
    display: flex;
    tr {
      grid-template-columns: 1fr 1fr;
      td {
        padding-right: 0.5rem;
        font-size: 1rem;
      }
      
    }
  }      
`