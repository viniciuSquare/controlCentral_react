import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.208);

  z-index: 5;

  display: flex;

  .modal-title {
    color: var(--title);
  }
  
  .modal-content {
    background-color: white;
    min-height: 30vh;
    max-height: 90vh;
    width: 55vw;

    padding: 1.2rem 1.5rem 2.5rem;
    margin: auto;

    border-radius: 8px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .modal-content::-webkit-scrollbar {
      display: none;

    }
  /* TODO */
    /* MEDIA QUERY 965px */
    /* MEDIA QUERY 728px */
  

`