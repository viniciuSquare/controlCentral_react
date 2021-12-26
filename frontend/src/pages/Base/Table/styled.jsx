import styled from "styled-components";


export const TableStyled = styled.table`
  background-color: #E0EAFC;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;

  tr, thead {
    grid-template-columns: 2fr 2fr 2fr 1.5fr 1.5fr;
  }
`