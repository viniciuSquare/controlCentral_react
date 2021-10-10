import styled from "styled-components";

export const TaskStyled = styled.div`
  width: 100%;
  height: 125px;

  /* margin: 1rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  padding: 1.125rem;
  border-radius: 10px;
  /* background-color: #e9e9e956; */
  background-color: var(--card-background);
  box-shadow: 0px 0px 20px 5px rgba(106, 132, 208, 0.1);

  .task-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    .task-title {
      font-size: 1.125rem;
    }
    
    .task-lastUpdate{
      display: flex;
      gap: 0.4rem ;
      > strong {
        color: #797979;
      }
    }
  }
  
  .task-status {
    display: flex;
    align-items: baseline;
    justify-content: space-between;  
    > div {
      display: flex;
      align-items: baseline;

    }  

  }

  .task-footer {
    display: flex;
    justify-content: space-between;
    .task-status{
      align-items: center;
      gap: 1rem ;
      
      > div {
        align-items: center;
        img {
          width: 1.25rem;
        }
        gap: 0.4rem ;

      }
    }

    span.status {
      background: green;
      color: #f4f4f4;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }

  }
  
`