import Modal from "../../components/Modal";
import { StyledTaskSettingsForm } from "./styled";

export default function TaskSettingsModal({closer}){
  // TODO - handle closer
  let today = new Date()
  var options = { weekday: 'long', month: 'short', day: 'numeric' };
  
  let taskCateories = [ "Suporte - eSolution", "Ticket - eSolution", "Suporte - Wi-Fi", "Permissões - eSolution" ]
//   let taskStatus = [
//     {status:}
// ]

  return(
    <Modal toggleVisibility={closer}>
      <StyledTaskSettingsForm>
        <div className="modal-head">
          <h1 className="modal-title" >Settings</h1>

        </div>
        <div className="task-status">

        </div>
        <div className="task-category">

        </div>
      </StyledTaskSettingsForm>
    </Modal>
  )
}