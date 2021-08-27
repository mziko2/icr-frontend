import './App.css';
import lecon from './lecon.png'; 
import Pocetna from './pocetna'
import Onama from './onama'
import FAQ from './faq'
import Login from './login'
import Register from './signup/signup';
import {Jobs} from './jobs/jobs';
import {OnlineTests} from './onlinetests/onlinetests'
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
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Register}/>
    <Route path="/jobs" component={Jobs}/>
    <Route path="/onlinetests" component={OnlineTests}/>
    </Switch>
    </Router>
       </div>
  );
}

export default App;
