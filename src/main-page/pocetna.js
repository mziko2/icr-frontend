import './App.css';
import lecon from './lecon.png'; 
import { Button } from 'rsuite';

function Pocetna() {
  return (
    <div className="Pocetna">
    <div> <img className="photo" src={lecon} alt="Logo" /></div>
     <div id={'text'}>
      Nas cilj je pracenjem trendova, kao i potreba naših kandidata bez obzira na njihovu starosnu dob 
      i uvođenjem noviteta za što lakše iskustvo do vozačke dozvole, uvijek budemo korak ispred ostalih.
      </div>
      <div id={'divBtnMain'}>
      <Button className="buttonRegister" >Registruj se</Button>
      <Button className="buttonMain">Apliciraj za posao</Button>
      <Button className="buttonMain">Saznaj više</Button>

      </div> 
      </div>
  );
}

export default Pocetna;
