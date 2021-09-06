import { PieChart } from 'react-minimal-pie-chart';
import './report.css';
import MyChart from './chart'
import { NavBarUser } from '../navBarUser/navBarUser';


function Report() {
    return (
        <div>
            <NavBarUser/>
            <div class="container">
            <div class="row">
                <div class="col" id="chartcol">
            <PieChart
                data={[
                    { title: 'Two', value: 21, color: '#B9AC92' },
                    { title: 'Three', value: 7, color: '#FFA931' },
                    { title: 'Four', value: 4, color: '#FECB89' },
                    { title: 'One', value: 68, color: '#FBE6D4' },
                ]}
            />;  
            </div>
            <div class="col">
                <ul>
                <li>
                    <ins class="color-box" style={{ 'background-color': '#FBE6D4' }}></ins>
                    68% kandidata su položili iz prvog puta
                    </li>
                    <li>
                    <ins class="color-box" style={{ 'background-color': '#B9AC92' }}></ins>
                    21% kandidata su položili iz drugog puta
                    </li>
                    <li>
                    <ins class="color-box" style={{ 'background-color': '#FFA931' }}></ins>
                    7% kandidata su položili iz trećeg puta
                    </li>
                    <li>
                    <ins class="color-box" style={{ 'background-color': '#FECB89' }}></ins>
                    4% kandidata su položili iz četri i više pokušaja
                    </li> 
                </ul>
            </div>
            <div class="col">
                <MyChart/>
            </div>
        </div>
    </div>
        </div>
      
    );
}

export default Report;