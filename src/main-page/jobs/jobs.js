import React from 'react';
import './jobs.css';

export class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           jobs: [
              { id: 1, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti:["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo"},
              { id: 2, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti:["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo"},
              { id: 3, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti:["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo"},
              { id: 4, naziv: "Instruktor vožnje B kategorije (M/Ž)", opis: "Auto Škola Lecon raspisuje javni poziv za prijavu instruktora vožnje B kategorije.", uvjeti:["završena srednja stručna sprema", "posjedovanje dozvole instruktora vožnje A,B kategorije", "poznavanje engleskog jezika"], mjesto: "Sarajevo"}
           ]
        }
     }
     renderTableData() {
        return this.state.jobs.map((jobs, index) => {
           const { id, naziv } = jobs //destructuring
           return (
              <tr key={id}>
                 <td onClick={() => this.getJobData(id)}>{naziv}</td>
              </tr>
           )
        })
     }
     getJobData(id){

     }
    render (){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <table id="jobs">
                            <tbody>
                                <tr>
                                    <th>Naziv posla</th>
                                </tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                    <div class="col-4">
                        <p>FORMA ZA PRIJAVU ZA POSAO</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Jobs;