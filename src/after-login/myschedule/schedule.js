import React from 'react'; 
import './schedule.css';
import {Button} from 'rsuite'
import ControlledPopup from './popup';


export class Schedule extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          onlinetests: [
             { id:1,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
             { id:2,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
             { id:3,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
             { id:4,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
             { id:5,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
             { id:6,datum: "1.9.2021", vrijeme: "13:00",vozilo:"Opel Corsa", instruktor: "Senad Bašic", kategorija:"B" },
          ]
       }
       this.izbaci.bind(this)
       this.renderTableData.bind(this)
    }
   izbaci(id) {
      let filteredArray = this.state.onlinetests.filter(item => item.id !== id)
      this.setState((state) => {
         return {onlinetests: filteredArray};
       });
          
   }
 
    renderTableData() {
       return this.state.onlinetests.map((tests, index) => {
          const { id, datum, vrijeme, instruktor,kategorija,vozilo } = tests //destructuring
          return (
             <tr key={id}>
                <td>{datum}</td>
                <td>{vrijeme}</td>
                <td>{instruktor}</td>
                <td>{vozilo}</td>
                <td>{kategorija}</td>
                <td><Button onClick={()=>this.izbaci(id)} className="otkazi" >Otkaži</Button></td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div className="tabela">
             <h1 id='title'>Moj raspored</h1>
             <h4 id='title'>Zakazani  časovi vožnje:</h4>
             <table id='onlinetests'>
                <tbody>
                   <tr>
                       <th>Datum časa</th>
                       <th>Vrijeme časa</th>
                       <th>Instruktor</th>
                       <th>Vozilo</th>
                       <th>Kategorija</th>
                       <th></th>

                   </tr>
                   {this.renderTableData()}
                </tbody>
             </table>
             <div >
               <Button id={"zakazi"} className="otkazi" >Zakaži čas</Button> 
               <ControlledPopup id={"zakazi"} className="otkazi"/>
                  </div>
          </div>
       )
    }
 }
 
