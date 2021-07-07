import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 30% auto;

  height: 60px;
  align-items: center;

  color: #FFF;

  .page-title {
    padding-left: 7.5rem;
    color: #000;

  }

  .header-body {
    display: flex;

    align-items: center;

    width: 100%;
    height: 100%;

    justify-content: flex-end;

    border-radius: 0 0 0 45px;
    padding-right: 2rem ;

    background: rgba(44, 44, 136, 0.8);

    > input {
      height: 2rem; 
      background-color: #b0adad42;

      border: 1px solid rgba(0,0,0,0.3);
      border-radius: 6px;

      width: 220px; 

    }

    #notification-icon {
      margin: 0 1.5rem;

      path {
        fill: #FFF;
      }
    }
     #username {
       font-weight: 300;
     }
  }


`