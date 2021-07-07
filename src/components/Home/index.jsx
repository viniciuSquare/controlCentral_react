import { HomeStyled } from './styled.jsx'

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export function Home() {
  return (
    <HomeStyled>
      <Sidebar/>
      
      <div className="content" >
        <Header />
        <div className="container">
          <div className="container-head">
            <h2>02 jul, </h2> <h3> friday</h3>
          </div>
          
          <div className="tasks-panel">

            <div className="task">
              <div className="task-head">
                <h2 className="task-title" >Printer problem</h2>
                <span className="task-type" > Support </span>
              </div>
              <div className="taks-status">
                <p>Created at 01 jul</p>
                <div className="task-lastUpdate">
                  <strong>Last update:</strong> <p>Took to clean by viniciusq</p>
                </div>
              </div>
            
              <div className="task-footer">
                <p className="task-requester" >RH - <span>Reinaldo</span></p>
              </div>

            </div>

          </div>

        </div>

      </div>
      
    </HomeStyled>
  )
}