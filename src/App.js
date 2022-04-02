import ExchangeList from './components/ExchangeList';
import './css/App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Crypto Direct
        </p>
      </header>
      <ExchangeList />
    </div>
  );
}