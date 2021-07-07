import styled from 'styled-components'

export const HomeStyled = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: minmax( 10rem, 255px) auto;

  /* GLOBAL STYLE */
  height: 100vh;

  .container {
    height: 90%;
    width: 90%;

    margin: auto;
    margin-top: 1.5rem;
    padding-top: 2rem;
    background-color: #e3e3e36b ;
    box-shadow: 0px 0px 30px 1px rgba(0,0,0,0.17);

    border-radius: 14px;

    .container-head {
      display: flex;        
      align-items: baseline;
      justify-items: baseline;
      
      gap: 0.4rem;
      padding: 0 1.5rem;

      height: 3rem;
      border-bottom: 1px solid #dfdfdfc4;

      h2 {
        color: #454545f3;
      }
      h3 {
        color: #bababa;

      }

    }

    .tasks-panel {
      padding: 3rem 1.5rem;

      display: flex;
      flex-direction: column;
      
      .task {
        width: 100%;
        height: 150px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        padding: 1.3rem 3.5rem 1rem 1.2rem;
        border-radius: 10px;
        background-color: antiquewhite;

        .task-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .taks-status {
          display: flex;
          align-items: baseline;
          justify-content: space-between;

          .task-lastUpdate{
            display: flex;
          }
        }
      }
    }

  }


`