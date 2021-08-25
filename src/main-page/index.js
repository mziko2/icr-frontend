import './App.css';
import lecon from './lecon.png'; 
import { Button } from 'rsuite';

function App() {
  return (
    <div className="App">
    <div className="mainPage">
    <div> <img className="photo" src={lecon} alt="Logo" /></div>
     <div id={'text'}>
      Nas cilj je pracenjem trendova, kao i potreba naših kandidata bez obzira na njihovu starosnu dob 
      i uvođenjem noviteta za što lakše iskustvo do vozačke dozvole, uvijek budemo korak ispred ostalih.
      </div>
      <div id={'btn'}>
      <Button>Registruj se</Button>
      <Button>Apliciraj za posao</Button>
      <Button>Saznaj više</Button>

      </div> 
      </div>
       </div>
  );
}

export default App;
