import ExchangeList from './components/ExchangeList';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import ExchangeDetail from './components/ExchangeDetail';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Crypto Direct
        </p>
      </header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <ExchangeList />
          </Route>
          <Route path='/exchange/:id'>
            <ExchangeDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}