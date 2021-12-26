import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks';
import { Employees } from './pages/Employees';
import { Devices } from './pages/Devices';
import { Knowledge } from './pages/Knowledge';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LocationsPage } from './pages/Locations';

import classNames from "classnames";

import { AppStyled } from './styled'
import { DataContextProvider } from './contexts/DataContext';

import { useSession } from './hooks/useSession';
import { SessionContextProvider } from './contexts/SessionContext';
import { Accounts } from './pages/Accounts';
import Base from './pages/Base';
import { MockDevices } from './pages/mock_devices';

export default function App() {
  const {isSidebarOpen} = useSession();
  return (
    <SessionContextProvider>
      <DataContextProvider>
          {/* CONTEXTS */}
          <AppStyled className={classNames(isSidebarOpen ? "sidebar-open" : "sidebar-closed")}>
            <BrowserRouter>
              <Sidebar id="sidebar-menu"/>            
              <div className="content">
                <Header/> 
                <Switch> 
                  <Route path="/base" component={Base} />
                  <Route path="/mock" component={MockDevices} />

                  <Route path="/" exact component={Home} />
                  <Route path="/tarefas" component={Tasks} />
                  <Route path="/tarefas/:taskId" component={Tasks} />

                  <Route path="/contas" component={Accounts} />

                  <Route path="/funcionarios" component={Employees} />

                  <Route path="/dispositivos" component={Devices} />
                  <Route path="/dispositivos/:category" exact component={Devices} />

                  <Route path="/locais" component={LocationsPage} />
                  <Route path="/base-conhecimento" component={Knowledge} />
                </Switch>
              </div>
            </BrowserRouter>
          </AppStyled>
          {/* ------ */}
      </DataContextProvider>
    </SessionContextProvider>
    
  );
}