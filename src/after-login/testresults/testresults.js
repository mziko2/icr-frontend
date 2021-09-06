import React from 'react'; 
import './testresults.css';
import {Button} from 'rsuite'
import { NavBarUser } from '../navBarUser/navBarUser';

export class Results extends React.Component {
    constructor(props) {
      super(props)
       fetch("http://localhost:8080/UradenTest").then(data=>data.json()).then(response=>{
      response=response.map(e=>{
         return {
            id:e.BrojTesta,
            kategorija:e.Kategorija,
            broj_pitanja:e.BrojPitanja,
            procenat:e.ProcenatTacnosti
         }
       })
       this.setState(
          state=>{
             return {onlinetests:response }
          }
       )
         
       
       
       console.log(response)
       })
     
       this.state = {
          onlinetests: [

          /*   { id: 1, kategorija: "B", broj_pitanja: 30, procenat:"50%" },
             { id: 2, kategorija: "B", broj_pitanja: 30, procenat:"50%" },
             { id: 3, kategorija: "A", broj_pitanja: 30, procenat:"50%" },
             { id: 5, kategorija: "C", broj_pitanja: 30, procenat:"50%" },
             { id: 6, kategorija: "A", broj_pitanja: 30, procenat:"50%" },
             { id: 7, kategorija: "C", broj_pitanja: 30, procenat:"50%" },
             { id: 8, kategorija: "B", broj_pitanja: 30, procenat:"50%" },
             { id: 9, kategorija: "C", broj_pitanja: 30, procenat:"50%" },
             { id: 10, kategorija: "B", broj_pitanja: 30, procenat:"50%" }*/
          ]
       }
    }
  
    renderTableData() {
       return this.state.onlinetests.map((tests, index) => {
          const { id, kategorija, broj_pitanja, procenat } = tests 
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{kategorija}</td>
                <td>{broj_pitanja}</td>
                <td>{procenat*100+' %'}</td>
                <td><Button className="buttonRegister" href="/test">Ponovi test</Button></td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <NavBarUser/>
             <div className="tabela">
          <h1 id='title'>Rezultati testova</h1>
          <table id='onlinetests'>
             <tbody>
                <tr>
                    <th>Broj testa</th>
                    <th>Kategorija</th>
                    <th>Broj pitanja</th>
                    <th>Procenat tačnih</th>
                    <th></th>

                </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div></div>
          
       )
    }
 }
 
