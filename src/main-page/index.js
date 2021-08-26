import './App.css';
import lecon from './lecon.png'; 
import Pocetna from './pocetna'
import Onama from './onama'
import FAQ from './faq'
import {NavBarInstance} from './navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
    <NavBarInstance/>
    <Switch>
    <Route exact path="/" component={Pocetna} />
    <Route path="/about" component={Onama} />
    <Route path="/faq" component={FAQ}/>
    </Switch>
    </Router>
       </div>
  );
}

export default App;
