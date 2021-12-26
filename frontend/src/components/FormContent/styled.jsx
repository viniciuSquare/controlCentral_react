import styled from "styled-components";

export const FormStyled = styled.div`
  form  {
    display: flex;
    flex-direction: column;
    
    row-gap: 1rem;
    margin-top: 1rem;
  
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

    .field-group-name {
      opacity: 0.6;
      margin-top: 1rem;
      margin-bottom: 0.6rem;
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
    
    #submit-btn {
      background: lightblue;
      height: 2.5rem;
      
      border-radius: 5px;
      width: 10rem;
      align-self: flex-end;
    }
  }
`

export const InputStyled = styled.div`
  row-gap: 0.25rem;

  width: 100%;
  display: flex;
  flex-direction: column;
`