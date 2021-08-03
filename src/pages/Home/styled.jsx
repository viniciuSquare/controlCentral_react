import styled from 'styled-components'

export const HomeStyled = styled.div`
  display: grid;

  grid-template-columns: 5fr 4fr;

  grid-template-rows: 40vh 40vh;
  
  grid-template-areas: 
    "secondary-pane main-pane"
    ". main-pane";

  > .primary-pane {
    grid-area: main-pane;
  }

  > .secondary-pane {
    grid-area: secondary-pane;
  }

  .tasks-pane { 
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* WARNING PANE */
  .warnings-pane {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
    .warning {
      height: 125px;

      display: flex;
      align-items: center;
      gap: 2rem;

      padding: 1.125rem;

      border-radius: 10px;
      background-color: var(--card-background);
      box-shadow: 0px 0px 20px 5px rgba(106, 132, 208, 0.1);

      img.warning-thumb {
        height: 100%;
        border-radius: 20px;
        object-fit: contain;
      }
      .warning-data {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .warning-title {
          font-size: 1.5rem;
        }
      }
    }
  }

`