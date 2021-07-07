import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
			<Switch>
		    <Route path="/" exact component={Home} />
			</Switch>
    </BrowserRouter>
  );
}