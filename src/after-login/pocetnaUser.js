import './pocetnaUser.css';
import { Button } from 'rsuite';
import { NavBarInstance } from './navigaton-login/navigation';


function PocetnaUser() {
  return (
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
  );
}

export default PocetnaUser;
