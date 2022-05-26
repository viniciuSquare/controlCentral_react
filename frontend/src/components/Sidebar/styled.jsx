import styled from 'styled-components'

export const SidebarStyled = styled.aside`
  /* background: linear-gradient(0deg, rgba(91, 91, 91, 0.18), rgba(91, 91, 91, 0.18)), linear-gradient(180deg, rgba(11, 10, 138, 0.9) 29.17%, #6A9AE4 100%); */

  background: #EBF1FD;

  padding: 0 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #brand-img {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem ;
    
    margin: 0.5rem auto;
    margin-bottom: 1rem;

    height: 50px;
    width: 80%;

    border-bottom: 1px solid #dfdfdf85;
    /* background-color: #332fff; */
    border-radius: 12px;

    color: #fff;

    h1.brand-title {
      font-family: "Nunito";
      letter-spacing: 0.2rem;
      color: #0e4194;

      align-self: center;
    }
    
    .logo {
      object-fit: contain;
      height: 38px;
      filter: drop-shadow(0px 4px 56px rgba(0, 0, 0, 0.25));
    }

    /* &::after {
      content: '';
      width: 1px;
      height: 100px;
      color: black;
    } */
  }
  
  #menu-title {
    display: flex;
    align-items: center;
    padding-left: 2.25rem;

    gap: 1rem;

    width: 100%;
    
    color: var(--title);

    /* margin: 2.25rem 0; */
    margin-bottom: 1.5rem;
  }

  #hide-sidemenu-btn {
    display: flex;
    align-items: center;
    line-height: 0;

    color: #AAA9E5;
    margin-bottom: 1.5rem;

    svg {
      margin: 0 0.6rem;
    }

    path {
      stroke: #AAA9E5;

    }
  }
  
  /* ICON ONLY SIDEBAR */
  &.hidden{
    width: 5rem;

    .menu-title, #menu-title h2, .pageCategoryLink p {
      display: none;
    }
    
    #menu-title, #hide-sidemenu-btn {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    
    #hide-sidemenu-btn {
      transform: rotate(180deg);
    }

    
  }

  .pageCategoriesList {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    row-gap: 1rem;
    h4{
      text-align: center;
      width: 4.25rem;
    }
    p:hover, h4:hover{
      color: #383838;
    }
    p, h4{
      color: #888888;
      cursor: pointer;
    }
  }

  @media(max-width: 800px) {
    display: none;
  }

`