
import lecon from './lecon.png'; 
import { Button } from 'rsuite';
import Footer from '../components/Footer'
import {NavBarInstance} from './navigation'
import './pocenta.css';


function Pocetna() {
  return (
    <div>
      <NavBarInstance/>
      <div className="pocetna">
    <div> <img className="photo" src={lecon} alt="Logo" /></div>
     <div id={'text'}>
      Nas cilj je pracenjem trendova, kao i potreba naših kandidata bez obzira na njihovu starosnu dob 
      i uvođenjem noviteta za što lakše iskustvo do vozačke dozvole, uvijek budemo korak ispred ostalih.
      </div>
      <div id={'divBtnMain'}>
      <Button className="button-Register" href="/signup" >Registruj se</Button>
      <Button className="button-Main" href="/jobs">Apliciraj za posao</Button>
      <Button className="button-Main" href="/about">Saznaj više</Button>

      </div> 
      </div>
    </div>
    
  );
}

export default Pocetna;
