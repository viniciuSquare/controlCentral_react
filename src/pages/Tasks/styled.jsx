import styled from "styled-components";

export const TasksStyled = styled.div`
  table {
    width: 100%;

    color: rgba(19, 19, 84, 0.6);

    
    thead, tr {
      display: grid;
      align-items: center;

      grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr;

      height: 2rem;
      
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
  
`