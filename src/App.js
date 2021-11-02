
import './App.css';
import CounterCTX from './components/CounterUseContext';
import { CounterProvider } from './context/CounterState';
import CounterUseState from './components/CounterUseState';
import CounterRedux from './components/CounterRedux';

function App() {
  return (
    <CounterProvider>
      <div className="App">
      <header className="App-header">
        <CounterRedux name="Redux Counter" />
        <CounterCTX name="useContext Counter" />
        <CounterUseState name="useState Counter" />
      </header>

      </div>
    </CounterProvider>
  );
}

export default App;
