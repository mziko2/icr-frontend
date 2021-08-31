import React from 'react';
import Select from 'react-select'

import './jobs.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Button } from 'rsuite';

//import 'react-accessible-accordion/dist/fancy-example.css';



export class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [
                { id: 1, naziv: "Instruktor vožnje A kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["Završena srednja stručna sprema", "Posjedovanje dozvole instruktora vožnje A,B kategorije", "Poznavanje engleskog jezika"], mjesto: "Zenica" },
                { id: 2, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["Završena srednja stručna sprema", "Posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo" },
                { id: 3, naziv: "Instruktor vožnje D/DE kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["Završena srednja stručna sprema", "Posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo" },
                { id: 4, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["Završena srednja stručna sprema", "Posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Tuzla" },
                { id: 5, naziv: "Računovoda", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu racunovodu", uvjeti: ["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika","Fakultet"], mjesto: "Sarajevo" },
                { id: 6, naziv: "Rukovodilac poslovne jedinice (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo" },
                { id: 7, naziv: "Šef financija (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv poziciju šefa financija", uvjeti: [,"Fakultet", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Zenica" },
                { id: 8, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti: ["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Mostar" }

            ]
        }
    }
    renderTableData() {
        return this.state.jobs.map((jobs, index) => {
            const { id, naziv, opis, uvjeti, mjesto } = jobs //destructuring
            return (
                <AccordionItem key={id} className="itemAccordion" onClick={() =>  this.setState({
                    userInput: naziv
                   })}>
                    <AccordionItemHeading>
                        <AccordionItemButton >
                            {naziv}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="panel">
                        <div>{opis}</div>
                        <div>Uvijeti:
                            {uvjeti.map((number) =>
                            <li>{number}</li>)}
                        </div>
                        <div>Mjesto rada: {mjesto}</div>
                    </AccordionItemPanel>
                </AccordionItem>
            )
        }

        )

    }
    render() {
    
        return (
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div className="konkursi">KONKURSI</div>
                        <div className="konkursNaslov">Naziv konkursa</div>
                        <Accordion allowMultipleExpanded>

                            {this.renderTableData()}
                        </Accordion>
                    </div>
                    <div class="col-6">
                

            
            <div className="fields">

            <div className="fieldKonkurs">
                    <div className="label">Odabrana pozicija</div>
                    <input value={this.state.userInput}  readOnly = {true} id={"odabrani"} type="text" /></div>
                    

                    <div className="fieldKonkurs">
                    <div className="label">Ime i prezime*</div>
                    <input type="text" /></div>
                    
                    <div className="fieldKonkurs">
                    <div className="label">Adresa stanovanja*</div>
                    <input type="text" /></div>

                    <div className="fieldKonkurs">
                    <div className="label">Datum rodenja*</div>
                    <input type="date" /></div>

                    
                    <div className="fieldKonkurs">
                    <div className="label">Kontakt telefon*</div>
                    <input type="text" /></div>

                    <div  className="fieldKonkurs">
                    <div className="label">Obrazovanje*
                </div><input id={"obrazovanje"} type="text" /></div>
                
                    <div className="fieldKonkurs">
                    <div className="label">Radno iskustvo*</div>
                    <input type="text" id={"obrazovanje"} /></div>
                
               
                <div className="fieldKonkurs">
                    <div id={"obaveznoPolje"} className="label">*- Polje je obavezno</div>
                    <Button   className="buttonApliciraj" >Apliciraj</Button>
                    </div>

            </div>
        </div>
                    </div>
                </div>
        )
    }
}
export default Jobs;