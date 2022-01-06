import styled from "styled-components";

export const StyledDevicesPage = styled.div`
  
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
