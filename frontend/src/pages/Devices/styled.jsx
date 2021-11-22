import styled from "styled-components";

export const StyledDevicesPage = styled.div`
  display: grid;
  grid-template-columns: 10% auto 15%;
  
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
      
      .pageCategoriesList {
        margin: 1rem 0;
  
        li {
          display: flex;
          flex: 1;
          justify-content: space-between;
  
          height: 3rem;
        }
      }

      .left-side-menu{
        padding-right: 0.5rem;

        input#new-category-title, button#toggle-new-device-modal {
          width: 100%;
        }

        button#toggle-new-device-modal {
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
    grid-template-rows: 4rem auto 45%;
    
    #device-detail {
      background-color: #E0EAFC;

      padding: 1rem;
      border-top: 1px solid gray;

      .select-to-see {

      }
      
    }
  }

  tr, thead {
    grid-template-columns: 2fr 2fr 2fr 1.5fr 1.5fr;
  }

  .right-side {
    background-color: lightcoral;
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
  .device-tools {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
  }

`

export const StyledNewDeviceForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .modal-head {
    display: flex;

    .modal-title {
      width: 100%;
      height: 3.5rem;
    }
    #dev-code {
      color: rgba(128, 128, 128, 0.5);
      width: 10rem;
    }
  }
  /* .inputs-to-hide {
    width: 100%;
    background: blue;

    &::before {
      content: " ";
      position: relative;
      width: 40%;
      height: 1px;
      color: blue;
    }

    button {
      width: 100%;
      background: white;
    }
  } */

  form  {
    display: flex;
    flex-direction: column;
    
    row-gap: 1rem;
    
    div.wrapper {
      row-gap: 0.25rem;

      width: 100%;
      display: flex;
      flex-direction: column;
      
    }
    .input-group { 
      display: flex;
      column-gap: 0.5rem;
    }
    
    label {
      color: gray;
    }

    input, select{
      height: 2.25rem;
    }

    textarea {
      height: 4.25rem;
      padding-top: 0.35rem;
      
    }

    input, textarea, select {
      padding-left: 0.5rem;
      
      border: 1px solid #d1d1d1b2;
      border-radius: 4px;
    }
    
    #submit-dev {
      background: lightblue;
      height: 2.5rem;
      
      border-radius: 5px;
      width: 10rem;
      align-self: flex-end;
    }
  }
`
