import './App.css';
import lecon from './lecon.png'; 
import Pocetna from './pocetna'
import Onama from './onama'
import FAQ from './faq'
import {Test} from './test'
import Login from './login'
import Register from './signup/signup';
import {Jobs} from './jobs/jobs';
import {OnlineTests} from '../after-login/onlinetests/onlinetests'
import {NavBarInstance} from './navigation';
import { NavBarUser } from '../after-login/navBarUser/navBarUser';
import PocetnaUser from '../after-login/pocetnaUser'
import Report from '../after-login/report/report'
import {Profile} from '../after-login/profile/profile'
import {Results} from '../after-login/testresults/testresults'
import {Schedule} from '../after-login/myschedule/schedule'
import FAQUser from '../after-login/FAQ/faq'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/" component={Pocetna} />
    <Route path="/about" component={Onama} />
    <Route path="/faq" component={FAQ}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Register}/>
    <Route path="/jobs" component={Jobs}/>
    <Route path="/user/onlinetests" component={OnlineTests}/>
    <Route path="/user/faq" component={FAQUser}/>
    <Route path="/test" component={Test}/>
    <Route path="/userMain" component={PocetnaUser}/>
    <Route path="/report" component={Report}/>
    <Route path="/user/profile" component={Profile}/>
    <Route path="/user/results" component={Results}>
    </Route>
    <Route path="/user/main" component={Schedule}/>
    </Switch>
    
    </Router>
       </div>
  );
}


export default App;
