import React from 'react'; 
import './testresults.css';
import {Button} from 'rsuite'
export class Results extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          onlinetests: [
             { id: 1, kategorija: "B", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 2, kategorija: "B", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 3, kategorija: "A", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 5, kategorija: "C", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 6, kategorija: "A", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 7, kategorija: "C", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 8, kategorija: "B", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 9, kategorija: "C", broj_pitanja: 30, vec_radjen:"50%" },
             { id: 10, kategorija: "B", broj_pitanja: 30, vec_radjen:"50%" }
          ]
       }
    }
  
    renderTableData() {
       return this.state.onlinetests.map((tests, index) => {
          const { id, kategorija, broj_pitanja, vec_radjen } = tests //destructuring
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{kategorija}</td>
                <td>{broj_pitanja}</td>
                <td>{vec_radjen}</td>
                <td><Button className="buttonRegister" href="/test">Ponovi test</Button></td>
             </tr>
          )
       })
    }
 
    render() {
       return (
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
          </div>
       )
    }
 }
 
