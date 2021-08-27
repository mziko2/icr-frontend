import './signup.css';
import { Button } from 'rsuite';

function Register() {
    return (
        <div className="register">
            <div className="naslov container">Registruj se</div>
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

    );
}

export default Register;
