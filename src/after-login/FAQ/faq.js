import './faq.css';
import Footer from '../../components/Footer'
import {NavBarUser} from '../navBarUser/navBarUser'



function FAQUser() {
    return (
        <div> <NavBarUser/>
        <div className="onama">

            <div className="naslov" >
                <div>FAQ - Često postavljana pitanja</div>
            </div>

            <div className='tekst'>
                <div className="podnaslov">Koje skraćenice odgovaraju kojim kategorijama</div>
                <ul >
                    <li>(A1) Motocikl do 125 cm3 i snage motora do 11 KW</li>
                    <li>(A2)  motocikli sa ili bez bočne prikolice čija snaga ne prelazi 35 kW i čiji omjer snaga/masa ne prelazi 0,2 kW/kg, a ne potječu od vozila čija je snaga dvostruko veća i više</li>
                    <li>(A) Motocikli sa ili bez bočne prikolice, motocikli na tri kotača snage preko 15kW, minimalna starosna dob 21</li>
                    <li>(B) Motorna vozila, osim vozila AM, A1, A2, A, F i G kategorije čija najveća dopuštena masa ne prelazi 3.500 kg i koja su dizajnirana i konstruirana za prijevoz ne više od 8 putnika</li>
<li>(BE) Ne dovodeći u pitanje odredbe propisa o tipnom odobrenju za dotična vozila, spada kombinacija vozila koja se sastoji od vučnog vozila kategorije B i priključnog vozila, pri čemu najveća dopuštena masa priključnog vozila nije veća od 3500 kg.</li>
<li>(C1) Motorna vozila osim onih iz kategorije D1, D ili F, čija je najveća dopuštena masa veća od 3500 kg, ali nije veća od 7500 kg </li>
<li>(C1E) Kombinacija vozila koja se sastoji od vučnog vozila kategorije C1 i njegova priključnog vozila koje ima najveću dopuštenu masu veću od 750 kg,pod uvjetom da najveća dopuštena masa kombinacije vozila nije veća od 12000 kg</li>
<li>(C)  Kombinacija vozila koja se sastoji od vučnoga vozila kategorije C kategorije i priključnog vozila čija najveća dopuštena masa iznosi više od 750 kg.</li>
<li>(D1) Motorna vozila projektirana i izrađena za prijevoz najviše 16 putnika uz vozača i čija maksimalna duljina nije veća od 8 m; motorna vozila ove kategorije mogu se kombinirati s priključnim vozilom čija najveća dopuštena masa nije veća od 750 kg</li>
<li>(D) Spadaju-motorna vozila projektirana i izrađena za prijevoz više od osam putnika uz vozača; motorna vozila ove kategorije mogu se kombinirati s priključnim vozilom čija najveća dopuštena masa nije veća od 750 kg</li>
<li>(DE) Ne dovodeći u pitanje odredbe propisa o tipnom odobrenju za dotična vozila, spada kombinacija vozila koja se sastoji od vučnog vozila kategorije D i njegova priključnog vozila koje ima najveću dopuštenu masu veću od 750 kg</li>
<li>(F) Spadaju traktori sa ili bez prikolice</li>
<li>(H) Spadaju: tramvaji</li>


                </ul>
            </div>
            <Footer></Footer>
        </div></div>
       
    );
}

export default FAQUser;
