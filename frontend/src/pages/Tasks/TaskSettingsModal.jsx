import Modal from "../../components/Modal";
import { StyledTaskSettingsForm } from "./styled";

export default function TaskSettingsModal({closer}){
  // TODO - handle closer
  let today = new Date()
  var options = { weekday: 'long', month: 'short', day: 'numeric' };
  
  return(
    <Modal toggleVisibility={closer}>
      <StyledTaskSettingsForm>
        <div className="modal-head">
          <h1 className="modal-title" > Nova tarefa</h1>

        </div>
        <form action="">
          <div className="wrapper">
            <label htmlFor="task-subject">Título</label>
            <input type="text" placeholder=""/>
          </div>
          <div className="wrapper">
            <label htmlFor="task-description">Descrição</label>
            <textarea name="task-description" id="" cols="30" rows="10" placeholder="Descrição da demanda..."></textarea>
          </div>
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="task-requester">Solicitante</label>
              <input name="task-requester" id="" placeholder="Solicitante" />
            </div>
            <div className="wrapper">
              <label htmlFor="task-request-time">Solicitado em</label>
              <input type="time" placeholder=""/>
            </div>

          </div>
          {/* - CATEGORIA
              - PRIORIDADE
          */}
          <div className="input-group">
            <div className="wrapper">
              <label htmlFor="task-category">Category</label>
              <select name="task-category">
                <option value="homework" className="tag-category"> Homework </option>
              </select>
            </div>
            <div className="wrapper">
              <label htmlFor="task-category">Prioridade</label>
              <select name="task-category">
                <option value="" disabled > Selecione prioridade...</option>
                <option value="priority-1" className="tag-priority-p0"> Urgente! </option>
                <option value="priority-1" className="tag-priority-p1"> Alta </option>
                <option value="priority-1" className="tag-priority-p2"> Médio </option>
                <option value="priority-1" className="tag-priority-p3"> Baixo </option>
              </select>
            </div>
          </div >

          <hr style={{opacity:"0.4", marginTop:"0.4rem"}} />

          <div className="end-form">
            <div className="request-meta-data">
              <div className="task-state-wrapper wrapper">
                <label htmlFor="task-state">Estado do chamado</label>
                <h4 id="task-state" className="open-tag tag" >Aberta</h4>
              </div>
              <div className="task-request-time wrapper">
                <label htmlFor="task-initial-date">Requisição em</label>
                <h4 id="task-initial-date" className="task-initial-date" >{today.toLocaleDateString("pt-BR", options).toLocaleUpperCase()}</h4>
              </div>
            </div>

            <button id="submit-task">
              Add task
            </button>
          </div>

        </form>
      </StyledTaskSettingsForm>
    </Modal>
  )
}