import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks';
import { Employees } from './pages/Employees';
import { Devices } from './pages/Devices';
import { Knowledge } from './pages/Knowledge';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
// import { Sidebar } from './evaluation/Sidebar-2';


import classNames from "classnames";

import { AppStyled } from './styled'
import { DataContextProvider } from './contexts/DataContext';

import { useSession } from './hooks/useSession';

export default function App() {
  const {isSidebarOpen} = useSession();
  return (
    <DataContextProvider>
        {/* CONTEXTS */}
        <AppStyled className={classNames(isSidebarOpen ? "sidebar-open" : "sidebar-closed")}>
          <BrowserRouter>
            
            <Header/> 
            
            <div className="content">
              <Sidebar id="sidebar-menu"/>
              <Switch> 
                <Route path="/" exact component={Home} />
                <Route path="/tarefas" component={Tasks} />
                <Route path="/tarefas/:taskId" component={Tasks} />
                <Route path="/funcionarios" component={Employees} />
                <Route path="/dispositivos" component={Devices} />
                <Route path="/dispositivos/:category" exact component={Devices} />
                <Route path="/base-conhecimento" component={Knowledge} />
              </Switch>
            </div>
          </BrowserRouter>
        </AppStyled>
        {/* ------ */}
    </DataContextProvider>
    
  );
}