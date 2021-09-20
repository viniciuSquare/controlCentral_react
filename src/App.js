import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks';
import { Employees } from './pages/Employees';
import { Devices } from './pages/Devices';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { AppStyled } from './styled'
import { SessionContextProvider } from './contexts/DataContext';

export default function App() {
  return (
    <SessionContextProvider>
      <AppStyled>

        <BrowserRouter>
          
          <Header/> 
          
          <div className="content">
            <Sidebar/>
            <Switch> 
              <Route path="/" exact component={Home} />
              <Route path="/tasks" component={Tasks} />
              <Route path="/employees" component={Employees} />
              <Route path="/dispositivos" component={Devices} />
            </Switch>
          </div>
        </BrowserRouter>
      </AppStyled>
    </SessionContextProvider>
    
  );
}