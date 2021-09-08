import './profile.css';
import React from 'react'; 
import { Button } from 'rsuite';
import { NavBarUser } from '../navBarUser/navBarUser';

export class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1, ime: "Emir",prezime:"Kurtovic",adresa:"Zmaj od Bosne bb",jmbg:"2411215475",broj:"234-252",email:"dwad@gmail.com",username:"test"

        }
    }

    render (){
       
        return (
<div>
    <NavBarUser/>
    <div className="onama">

<div className="profilnaslov" >
    Profil
</div>
<div className="profile">
    <div>
        <div className="fields">
            <div className="field">
                <div className="label">Ime</div>
                <div className="values">{this.state.ime}</div></div>

            <div className="field">
                <div className="label">Prezime</div>
                <div className="values">{this.state.prezime}</div></div>

            <div className="field">
                <div className="label">Adresa</div>
                <div className="values">{this.state.adresa}</div></div>


            <div className="field">
                <div className="label">JMBG</div>
                <div className="values">{this.state.jmbg}</div></div>


        </div></div>
    <div className="leftBorder">  <div className="fields">
        <div className="field">
            <div className="label">Broj telefona: </div>
            <div className="values">{this.state.broj}</div></div>

        <div className="field">
            <div className="label">E-mail</div>
            <div className="values">{this.state.email}</div></div>

        <div className="field">
            <div className="label">Username</div>
            <div className="values">{this.state.username}</div></div>


        <div className="field">
        <Button  id={"promjeniPW"}>Promjeni password</Button></div>


    </div></div>
 
</div>
<div id={"kontakt"}>Ukoliko je potrebno pormjeniti neke od ličnih podataka kontaktirajte nas na 033/222-000 ili putem e-mail adrese info@lecon.ba</div>
</div>
     </div>

     
        )
    }
    
}

