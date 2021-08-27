import './pocetnaUser.css';
import lecon from './lecon.png'; 
import { Button } from 'rsuite';



function PocetnaUser() {
  return (
    <div className="Pocetna">
      <div className='naslov'>Moj raspored</div>
     <div id={'text'}>
      Morate položiti testove kako bi imali raspored vožnji.
      </div>
      <div id={'divBtnMain'}>
      <Button className="buttonRegister" >Online testovi</Button>
      <Button className="buttonMain">Saznaj više</Button>

      </div> 
      </div>
  );
}

export default PocetnaUser;
