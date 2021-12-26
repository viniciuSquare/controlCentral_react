import { ItemDetailsStyled } from "./styled"

export const ItemDetails = ({item, children}) => {
  console.log(item)
  return(
    <ItemDetailsStyled>
      <h1 className="field-title">Detalhes da selação</h1>
      <div className="details-container" >
        { item.id
          ? (
            <>
              <div id="details">
                <div className="head">
                  <div className="title">
                    <p>Nome</p>
                    <h3>{item.alias}</h3>
                  </div>
                  
                  <div className="tools">
                    <button>
                      <BsPencilSquare size="32" />
                    </button>
                    <button>
                      <BsTrash2Fill size="32" />
                    </button>
                  </div>

                </div>
                <table>
                  <tbody>
                    {children}
                  </tbody>
                </table>
              </div>
            </>
          )
          : (
            <h1 className="field-title warning">Selecione item para ver detalhes</h1>
          )
      }
        
      </div>
    </ItemDetailsStyled>
  )

}