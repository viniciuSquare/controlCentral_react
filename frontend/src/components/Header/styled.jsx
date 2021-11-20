import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;

  margin: 0 0.5rem;

  align-items: center;
  justify-content: space-between;

  color: #203C6B;

  border-radius: 0 0 15px 15px;
  /* background: rgba(44, 44, 136, 0.8); */
  
  z-index: 2;

  .page-title {
    padding-left: 4.5rem;
  
    font-size: 1.8rem;
    color: var(--title);
  }

  .tools {
    display: flex;

    align-items: center;
    
    width: 60%;
    height: 100%;
    span {
      display: flex;
      align-items: center;

      input {
        height: 2rem; 
        background-color: #b0adad42;
  
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 6px;
  
        width: 220px; 
  
      }

    }

    

    #notification-icon {
      margin: 0 1.5rem;

      path {
        fill: #203C6B;
      }
    }

    button {
      display: flex;
      align-items: center;
  
      gap: 0.5rem;
  
      #username {
        color: #203C6B;
        font-weight: 300;
      }
  
      svg {
        margin-top: 5px;
        color: #203C6B;
      }
    }
  }
   
`