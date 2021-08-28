import './test.css';
import './Onama.css';
import { Button } from 'rsuite';

import Footer from '../components/Footer'

function Login() {
    return (
        <div className="test">
            <div className="naslov">Test 19</div>
            <div className='okvir'>
            <div className='pitanje'>
                  neko duze pitanje neko duze pitanjeneko duze pitanjeneko duze pitanjeneko duze pitanje
                    </div>
               <div className='rowAnswer'>
               
                        <div >
                            <Button className="answer" >Prijava</Button>
                        </div>
                        <div>
                            <Button className="answer" >Prijava</Button>
                        </div>

                    </div>
                    <div className='rowAnswer'>
                        <div>
                            <Button className="answer" >Prijava</Button>
                        </div>
                        <div>
                            <Button className="answer" >Prijava</Button>
                        </div>

                    </div>


                </div>
             

        
        </div>

    );
}

export default Login;
