import styled from "styled-components";
import Modal from '../../components/Modal'

export const StyledDevicesPage = styled.div`
  display: grid;
  grid-template-columns: 20% auto 10%;
  
  width: 100%;

  .left-side {
    padding-top: 3rem;
    .container-head {
      display: flex;
      justify-content: space-between;
      margin-right: 1.5rem;
    }
    .pageCategoriesList {
      margin: 1rem;
      li {
        height: 3rem;
        .category-initial-letter {
          width: 20px;
          text-align: center;
          text-transform: uppercase;
          margin-right: 1rem;
        }
      }
    }
  }

  .right-side {
    background-color: lightcoral;
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
