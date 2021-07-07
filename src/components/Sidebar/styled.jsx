import styled from 'styled-components'

export const SidebarStyled = styled.div`
  background: linear-gradient(0deg, rgba(91, 91, 91, 0.18), rgba(91, 91, 91, 0.18)), linear-gradient(180deg, rgba(11, 10, 138, 0.9) 29.17%, #6A9AE4 100%);

  #brand {
    display: flex;
    justify-content: center;
    gap: 1rem ;
    
    height: 60px;
    width: 80%;

    margin: 0 auto;

    border-bottom: 1px solid #dfdfdf85;

    h1.brand-title {
      font-family: "tayayaFont";

      align-self: center;
      color: #fff;
      
      letter-spacing: 0.2rem;
    }
    
    .logo {
      object-fit: contain;
      max-width: 2.5rem;
    }
    a {
      text-decoration: none;
    }
  }

`