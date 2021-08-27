import React from 'react'; 
import './onlinetests.css';
import {Button} from 'rsuite'
export class OnlineTests extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          onlinetests: [
             { id: 1, kategorija: "B", broj_pitanja: 30, vec_radjen:"NE" },
             { id: 2, kategorija: "B", broj_pitanja: 30, vec_radjen:"DA" },
             { id: 3, kategorija: "A", broj_pitanja: 30, vec_radjen:"NE" },
             { id: 4, kategorija: "C", broj_pitanja: 30, vec_radjen:"DA" }
          ]
       }
    }
  
    renderTableData() {
       return this.state.onlinetests.map((student, index) => {
          const { id, kategorija, broj_pitanja, vec_radjen } = student //destructuring
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{kategorija}</td>
                <td>{broj_pitanja}</td>
                <td>{vec_radjen}</td>
                <td><Button className="buttonRegister">Započni test</Button></td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>Online Testovi</h1>
             <table id='onlinetests'>
                <tbody>
                   <tr>
                       <th>Broj testa</th>
                       <th>Kategorija</th>
                       <th>Broj pitanja</th>
                       <th>Već rađen</th>
                       <th></th>

                   </tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
