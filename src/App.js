import ExchangeList from './components/ExchangeList';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExchangeDetail from './components/ExchangeDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='header-top'>
            <div className='title'>
              Crypto Direct
            </div>
            <div className='nav'>
              <a href='https://www.linkedin.com/in/ebaby-benold-11216325/'><div className='nav-btn'><div className='linked-in'></div></div></a>
              <Link to='/'><div className='nav-btn'>Home</div></Link>
            </div>
          </div>
          <div className='header-main'>
            <div className='logo-top' alt='crypto-coin-top' />
            <div className='logo-bottom' alt='crypto-coin-bottom' />
          </div>
        </header>
        <Routes>
          <Route path='/' element={<ExchangeList />} />
          <Route path='/exchange/:id' element={<ExchangeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}