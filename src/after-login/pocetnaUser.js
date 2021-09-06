import './pocetnaUser.css';
import { Button } from 'rsuite';
import {NavBarUser} from './navBarUser/navBarUser'

function PocetnaUser() {
  return (
    <div>
      <NavBarUser/>
  <div className="Pocetna">
      <div className='naslovRaspored'>Moj raspored</div>
     <div id={'text'}>
      Morate položiti testove kako bi imali raspored vožnji.
      </div>
      <div id={'divBtnMain'}>
      <Button className="buttonTestovi" >Online testovi</Button>
      <Button className="buttonMain">Saznaj više</Button>

      </div> 
      </div>

    </div>
  
  );
}

export default PocetnaUser;
