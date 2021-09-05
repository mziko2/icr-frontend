import './login.css';
import './Onama.css';
import { Button } from 'rsuite';

import Footer from '../components/Footer'

function Login() {
    return (
        <div className="login">
            <div className="naslov">Prijavi se</div>
            <div className="fields">
                <div className="field">
                    <div className="label">Username</div>
                    <input type="text" /></div>
                
                <div className="field">

                    <div className="label">Password
                    </div><input type="password" /></div></div>
            <div>
                <Button className="buttonPrijava" >Prijava</Button>
            </div>
            <div className="color">
                Zaboravili ste username ili password?</div>
            <div className="registrujSe">  <div>  Niste registrovani ?  </div><div className="color2"><a className="color2" href="/signup">Registrujte se!</a></div></div>
        </div>

    );
}

export default Login;
