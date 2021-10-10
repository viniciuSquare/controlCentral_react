import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks';
import { Employees } from './pages/Employees';
import { Devices } from './pages/Devices';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

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
                <Route path="/tasks" component={Tasks} />
                <Route path="/employees" component={Employees} />
                <Route path="/dispositivos" component={Devices} />
              </Switch>
            </div>
          </BrowserRouter>
        </AppStyled>
        {/* ------ */}
    </DataContextProvider>
    
  );
}