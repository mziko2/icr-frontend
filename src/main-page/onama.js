import './Onama.css';
import lecon from './lecon.png';
import { Fragment } from 'react';
import Footer from '../components/Footer'
import {NavBarInstance} from './navigation'
function Onama() {
    return (
        <div> 
            <NavBarInstance/>
            <div className="onama">

        <div className="naslovMain" >
            <div>O nama </div>
        </div>

        <div className='tekst'>
            <div className="podnaslov">Naša misija</div>
            Autoškola "Lecon" osnovana je sa misijom osposobljavanja kandidata da na zabavan i
            ekonomičan način postanu  savjesni učesnici u saobraćaju tokom obuke, pripremamo kandidate za pravilno
            i bezbjedno upravljanje i snalaženje u svim saobraćajnim situacijama.
        </div>
        <div className='tekst'>
            <div className="napodnaslovslov">Naša vizija</div>
            Vizija organizacije je dobijanje vozačke dozvole predstaviti kroz prizmu osposobljavanja upravljanjem motornim vozilom željene kategorije, a ne kroz zakonske obaveze
            i prepreke neophodne za samostalnu vožnju. Želimo ostvariti sigurnost na cestama širom Bosne i Hercegovine obučavanjem kandidata u njihovom nastojanju da postanu obazrivi,
            pažljivi i savjesni vozači. Težimo da u budućnosti pružimo najsavreminiji pristup i metode rada sa kandidatima, nudeci im online platformu za učenje i interakciju, čime ćemo postati
            napristupačnija i najmodernija autoškola u našem okruženju.
        </div>
        <div className='tekst'>
            <div className="podnaslov">Naš cilj</div>
            Naš cilj da praćenjem trendova, kao i potreba naših kandidata bez obzira na njihovu starosnu dob i uvođenjem noviteta za što lakše iskustvo do vozačke dozvole,
            uvijek budemo korak ispred ostalih.
            <ul>
                <li>Redovno oglašavanje kroz različite vrste medija, o ponudama i raznim pogodnostima,
                    naših trenutnih klijenta i budućih polaznika</li>
                <li>Do kraja tekuće godine osposobiti osnovne fukcionalnosti online platforme</li>
                <li>Tokom 2021. godine uvesti mogućnost kartičnog plaćanja svih usluga koje pruža
                    organizacija, te automatizacija organizovanja rasporeda vožnj</li>
                <li>U narednih 5 godina planiramo nabavku novih motornih vozila i proširenje kolektiva zbog
                    povećanja poslovanja
                </li>
            </ul>
        </div>
        <Footer/>

    </div></div>
       
    );
}

export default Onama;
