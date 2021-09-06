
import './login.css';
import './Onama.css';
import { Button } from 'rsuite';
import { PropTypes } from 'prop-types';
import Footer from '../components/Footer'
import {useState} from 'react';
import {NavBarInstance} from './navigation'
import { useHistory } from "react-router-dom";


async function loginUser(credentials) {
    return fetch('http://localhost:8080/Osoba/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((response)=>response.json()).then((json => {
        console.log(json);
        return json;
    })).catch(error =>{
          console.error('There was an error!', error);
          alert("Pogrešan username ili password! Pokušaj ponovo!");
      });
      
   }


function Login({setToken}) {
    let history = useHistory();
const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      username,
      password
    });
    if(user!=null &&  username===user.login.Username){
        console.log("idiii")
        history.push("/user/main")
    }
  }
    return (<div>
         <NavBarInstance/>
        <div className="login">
            <div className="naslov">Prijavi se</div>
            <div className="fields">
                <div className="field">
                    <div className="label">Username</div>
                    <input type="text" onChange={e => setUserName(e.target.value)} /></div>
                
                <div className="field">

                    <div className="label">Password
                    </div><input type="password" onChange={e => setPassword(e.target.value)} /></div></div>
            <div>
                <Button className="buttonPrijava" onClick={handleSubmit}  >Prijava</Button>
            </div>
            <div className="color">
                Zaboravili ste username ili password?</div>
            <div className="registrujSe">  <div>  Niste registrovani ?  </div><div className="color2"><a className="color2" href="/signup">Registrujte se!</a></div></div>
        </div>

    </div>
        
    );
}


export default Login;



