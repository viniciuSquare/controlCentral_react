import { HomeStyled } from './styled.jsx'

import { ContentPane } from '../../components/ContentPane/index.jsx';
import { Task } from '../../components/Task/index.jsx';

// mock data
import salaryImg from '../../assets/images/salary.jpeg'

export function Home() {
  return (
    <HomeStyled>
      <ContentPane 
      // primary headless main
        title={<>
          <h2>02 jul,</h2> <h3> friday</h3>
          </>}
      >            
        <div className="tasks-pane">
          <Task />
          <Task />
        </div>
      </ContentPane>
      
      {/* <ContentPane 
        title="Avisos"
      >
        <div className="warnings-pane">
          
          <div className="warning">
            <img className="warning-thumb" src={salaryImg} alt="Pink pig" />
            <div className="warning-data">
              <h1 className="warning-title">
                Salário
              </h1>
              <p>O salário está na conta!!</p>
            </div>
          </div>
        </div>
        
      </ContentPane>      */}
    </HomeStyled>
  )
}