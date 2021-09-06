import './signup.css';
import { Button } from 'rsuite';
import {NavBarInstance} from '../navigation'

function Register() {
    return (
        <div>
            <NavBarInstance/>
            <div className="register">
            <div id={"okvir"} className="naslov container">Registruj se</div>
            <div className="fields">
                    <div className="field">
                    <div className="label">Ime</div>
                    <input type="text" /></div>
                    
                    <div className="field">
                    <div className="label">Prezime</div>
                    <input type="text" /></div>

                    <div className="field">
                    <div className="label">Email</div>
                    <input type="text" /></div>

                    
                    <div className="field">
                    <div className="label">Username</div>
                    <input type="text" /></div>

                    <div className="field">
                    <div className="label">Password
                </div><input type="text" /></div>
                
                    <div className="field">
                    <div className="label">Ponovi password</div>
                    <input type="text" /></div>
                
                </div>
            <div>
                <Button className="buttonRegister" >Registruj se</Button>
            </div>
        </div>
        </div>
        

    );
}

export default Register;
