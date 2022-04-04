import ExchangeList from './components/ExchangeList';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
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
        <Routes>
          <Route path='/' element={<ExchangeList />} />
          <Route path='/exchange/:id'  element={<ExchangeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}