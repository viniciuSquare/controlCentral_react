import styled from "styled-components";

export const AppStyled = styled.div`
  * {
    font-family: 'Montserrat', sans-serif;

    text-decoration: none;
    --main-backgroud: #F5F6F8;
    /* --main-backgroud: rgba(171, 180, 211, 0.153); */
    /* --pane-background: #ffffff92; */
    --pane-background: #fff;
    --card-background: rgba(195, 209, 255, 0.324);

    --title: #203C6B;

  }

  button {
    cursor: pointer;
    
    background: transparent;
    border: none;

  }

  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
  
  .content {
    display: grid;
    grid-template-columns: minmax(10rem, 260px) auto;
    
    /* APPLY ONLY TO THE CONTENT CONTAINER */
    > div:nth-child(2) {

      width: 90%;
      margin: 0 auto;

      padding: 1.5rem;
      column-gap: 1rem;

    }
    background-color: var(--main-backgroud);

  }

  @media(max-width: 800px){
    
    font-size: 0.8rem;
    .content {
      display: flex;
      max-width: 100vw;
    }

  }


`