import { ContentPane } from '../ContentPane'
import { ModalStyled } from './styled'

export default function Modal({children, toggleVisibility, isForm}) {
  
  const handleToggleVisibility = (event) => {

    if(event.target == event.currentTarget) 
        toggleVisibility()
    else 
      return
  }

  return( 
    <ModalStyled onClick={handleToggleVisibility}>
      <div className="modal-content">
        {children}
      </div>
    </ModalStyled>

  )
}