import styled from "styled-components";


export const LocationsPageStyled = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;

  .container-pane {
    width: 100%;
    
    tr, thead {
      grid-template-columns: 1fr 1fr 2fr 0.5fr;

    }
  }
  
`