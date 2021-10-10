import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: minmax(10rem, 260px) 30% auto;  



  margin: 0 0.5rem;

  /* height: 60px; */
  align-items: center;
  /* margin-bottom: 0.5rem; */

  color: #FFF;

  border-radius: 0 0 15px 15px;
  /* background: rgba(44, 44, 136, 0.8); */
  background: #2a51dc;
  
  z-index: 15;

  #brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem ;
    
    height: 60px;
    width: 80%;

    margin: 0 auto;

    border-bottom: 1px solid #dfdfdf85;

    color: #fff;

    h1.brand-title {
      /* font-family: "tayayaFont"; */
      font-family: 'Nunito', sans-serif;

      align-self: center;
      /* font-weight: bolder; */
      
      letter-spacing: 0.2rem;
    }
    
    .logo {
      object-fit: contain;
      /* max-width: 2.5rem; */
      height: 42px;
    }

    &::after {
      content: '';
      width: 1px;
      height: 100px;
      color: black;
    }
  }

  .page-title {
    padding-left: 4.5rem;


  }

  .header-body {
    display: flex;

    align-items: center;

    width: 100%;
    height: 100%;

    justify-content: flex-end;

    padding-right: 2rem ;


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
    button {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      #username {
        color: white;
        font-weight: 300;
      }

      svg {
       margin-top: 5px;
      }
    }
  }


`