import './profile.css';

import { Button } from 'rsuite';

function Profile() {
    return (
        <div className="onama">

            <div className="profilnaslov" >
                Profil
            </div>
            <div className="profile">
                <div>
                    <div className="fields">
                        <div className="field">
                            <div className="label">Ime</div>
                            <div className="values">EMIR</div></div>

                        <div className="field">
                            <div className="label">Prezime</div>
                            <div className="values">Kurtovic</div></div>

                        <div className="field">
                            <div className="label">Adresa</div>
                            <div className="values">Zmaj od Bosne bb</div></div>


                        <div className="field">
                            <div className="label">JMBG</div>
                            <div className="values">123456789</div></div>


                    </div></div>
                <div className="leftBorder">  <div className="fields">
                    <div className="field">
                        <div className="label">Broj telefona: </div>
                        <div className="values"> 222-222</div></div>

                    <div className="field">
                        <div className="label">E-mail</div>
                        <div className="values">dawdw@gmail.com</div></div>

                    <div className="field">
                        <div className="label">Username</div>
                        <div className="values">wadawdwa</div></div>


                    <div className="field">
                    <Button  id={"promjeniPW"}>Promjeni password</Button></div>


                </div></div>
             
            </div>
            <div id={"kontakt"}>Ukoliko je potrebno pormjeniti neke od ličnih podataka kontaktirajte nas na 033/222-000 ili putem e-mail adrese info@lecon.ba</div>
        </div>
    );
}

export default Profile;
