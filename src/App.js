import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks';
import { Employees } from './pages/Employees';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { AppStyled } from './styled'

export default function App() {
  return (
    <AppStyled>

      <BrowserRouter>
        
        <Header/>
        
        <div className="content">
          <Sidebar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/employees" component={Employees} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppStyled>
    
  );
}