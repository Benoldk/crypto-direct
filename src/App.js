import ExchangeList from './components/ExchangeList';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExchangeDetail from './components/ExchangeDetail';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<ExchangeList />} />
          <Route path='/exchange/:id' element={<ExchangeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}