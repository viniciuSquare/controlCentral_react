import styled from "styled-components";

export const TasksStyled = styled.div`
  display: grid;
  grid-template-columns: 20% auto 10%;

  .container-pane {
    display: grid;
    grid-template-rows: 5rem minmax(30%, 50%) auto;
  }

  .title-n-filters {
    display: flex;
    align-items: center;
  }

    /* #title {
      margin-right: 1.5rem;
    }
    .filters {
      button {
        height: 2.5rem;
        font-size: 1rem;

        margin-right: 2rem ;

        &:not(:last-child){
          border-right: 1px solid #74747461;
        }

      }
    } */
  
  .buttons-container {
    display: flex;
    align-items: center;

    width: 300px;
    background-color: red;
    
    button{
      background-color: aliceblue;
      height: 2rem;
      max-height: 80px;

      width: 100%;
      max-width: 10vw; 
      /* DEFAULT STYLE */
      line-height: 0;
    }
  }

  table {
    thead, tr {
      grid-template-columns: 2fr 2fr 2fr 1.5fr 1.5fr 1.5fr !important; 
    }
    tr {
      height: 3rem !important;
    }
  }

  .preview-pane {
    background-color: red;
  }

  .right-side {
    /* background-color: red; */
    width: 100%;
    max-width: 260px;

    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      background-color: #e0e0e06c;
      height: 2.5rem;
      font-size: large;

      &:not(:last-child){
        border-bottom: 1px solid #74747461;
      }

    }
  }
  
  
`

export const StyledNewTaskForm = styled.div`
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
    
    #submit-task {
      background: lightblue;
      height: 2.5rem;
      
      border-radius: 5px;
      width: 10rem;
      align-self: flex-end;
    }
  }
  .task-state-wrapper{
    display: block;
    .tag {
      display: block;
      height: 1.35rem;
      max-width: 4.5rem ;
      padding: 0 0.2rem;
      text-align: center;
      
      border-radius: 3px;
      border: 1px solid lightgreen;
      color: #1d1d1da9;

    }
    .open-tag {
      background: #1cac1c4c;

    }

  }
  .end-form {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    .request-meta-data {
      div:first-child {
        margin-bottom: 1rem;
      }
    }
    
    #submit-task {
      margin: 0 1rem;

    }

  }
  
`

export const StyledTaskSettingsForm = styled.div`

`