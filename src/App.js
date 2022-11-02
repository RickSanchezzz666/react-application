import './App.css';
import Component1 from './components/cards';
import Component2 from './components/navigation';

function App() {
  return (
    <div className="container">
    <div className='navigate'><Component2 /></div>
    <div className="Cards"><Component1 /></div>
    </div>
  );
}

export default App;
