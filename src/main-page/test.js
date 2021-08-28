import React from 'react'; 
import './test.css';
import './Onama.css';
import { Button } from 'rsuite';
import Footer from '../components/Footer'

export class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 4, broj_pitanja: 12, pitanje:"Koje je najmanja dozvoljena brzina kretanja automobila na autoputu?",
             odg1:"30 km/h",odg2:"40 km/h",odg3:"50 km/h",odg4:"60 km/h",odgTacan:"60km/h" 
        }
     }

    render (){
        return (
        <div className="test">
            <div className="naslov">Test broj {this.state.id}</div>
            <div className='okvir'>
            <div className='pitanje'>
                  Pitanje {this.state.broj_pitanja}. {this.state.pitanje}
                    </div>
               <div className='rowAnswer'>
               
                        <div >
                            <Button className="answer" >{this.state.odg1}</Button>
                        </div>
                        <div>
                            <Button className="answer" >{this.state.odg2}</Button>
                        </div>

                    </div>
                    <div className='rowAnswer'>
                        <div>
                            <Button className="answer" >{this.state.odg1}</Button>
                        </div>
                        <div>
                            <Button className="answer" >{this.state.odg1}</Button>
                        </div>

                    </div>
                </div>        
        </div>
        )
    }
}

