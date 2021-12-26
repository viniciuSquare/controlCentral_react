import { Children } from "react";
import { TableStyled } from "./styled";

export const ItensList= ({data, handleItemSelection, children})=> {

  function handleDataSelection(event){
    const {target} = event;

  }

  return(
    <TableStyled id="data-listage"  className="with-td-division">
      {children}
    </TableStyled>
  )
}