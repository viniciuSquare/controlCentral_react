import styled from "styled-components";

export const ContentPaneStyled = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;

  border-radius: 8px;
  margin: auto;
  
  /* box-shadow: 0px 0px 30px 1px rgba(0,0,0,0.17); */
  /* margin: 0 2rem; */
  /* margin: auto; */

  .container-head {
    display: flex;        
    flex-direction: column ;
    /* align-items: center; */
    justify-content: space-between;
    
    gap: 0.4rem;
    padding: 0 1.5rem 1.5rem 0;

    height: 3rem;
    /* border-bottom: 1px solid #dfdfdfc4; */

    background: var(--main-background);
    .tools, .list-head{
      display: flex;
        
      &.list-head {
        justify-content: space-between;
      }
      
      hr.vertical{
        height: 100%;
        width: 1px;
        margin: 0 1rem;
      }
    }

    h2 {
      color: #454545f3;
    }
    h3 {
      color: #bababa;

    }
  }

  .pane-content {
    height: 100%;
    background: var(--pane-background);

    border-radius: 8px;
    box-shadow: 0px 5px 49px 10px rgba(106, 132, 208, 0.18);

    max-height: 80vh;
    padding: 1rem 1.5rem;
    
  }

  /* APPLICABLE CUSTOM SETTINGS */

  &.single-container {
    max-width: 1000px;
  }
  
  /* SET SMALL CLASS ATTRIBUTES */

  &.medium-container {
    max-width: 860px;
  }


`