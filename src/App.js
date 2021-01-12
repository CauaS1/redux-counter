import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <h1>| Counter |</h1>
      <Counter />
      <h4>| Message |</h4>
      <Message />
    </div>
  );
}

export default App;
