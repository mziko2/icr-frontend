import React, { useState } from 'react'; 
import './test.css';
import './Onama.css';
import { Button } from 'rsuite';
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core';
import { NavBarUser } from '../after-login/navBarUser/navBarUser';

const useStyles = makeStyles((theme)=>({
    answer:{
        width: "max-content",
        marginBottom: "1rem",
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        border: "2px solid #ff6600",
        color: "aliceblue",
        borderRadius: "2cm",
        cursor: "pointer",
        overflow: "hidden",
        width: "75%"
    },
    correctAnswer:{

        width: "max-content",
        marginBottom: "1rem",
        backgroundColor: "green",
        backgroundRepeat: "no-repeat",
        border: "2px solid  #ff6600",
        color: "aliceblue",
        borderRadius: "2cm",
        cursor: "pointer",
        overflow: "hidden",
        width: "75%"
    },
    inccorectAnswer:{
        width: "max-content",
        marginBottom: "1rem",
        backgroundColor: "red",
        backgroundRepeat: "no-repeat",
        border: "2px solid  #ff6600",
        color: "aliceblue",
        borderRadius: "2cm",
        cursor: "pointer",
        overflow: "hidden",
        width: "75%"
    },
    pitanjaGrid :{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
   
    }

}))



const dummyTest={
    id: 4, 
    brojPitanja: 4,
    pitanja:[
        {
            tekstPitanja: "Koje je najmanja dozvoljena brzina kretanja automobila na autoputu?",
            odgovori:[
                "30 km/h",
                "40 km/h",
                "50 km/h",
                "60 km/h"
            ],
            odgTacan:"60 km/h", 
        },
        {
            tekstPitanja: "Kako se naziva uzdužni dio kolovoza namijenjen za saobraćaj vozila u jednom smjeru?",
            odgovori:[
                "Saobracajna traka",
                "Kolovozna traka",
                "Kolovoz",
                "Put"
            ],
            odgTacan:"Kolovozna traka", 
        },
        {
            tekstPitanja: "Projektovanjem i gradnjom novih javnih puteva, osim lokalnih, mora se obezbijediti da podnesu osovinsko opterećenje od:",
            odgovori:[
                "Najmanje 11,5 tona",
                "Najmanje 14,5 tona",
                "Najmanje 13,5 tona",
                "Najmanje 12,5 tona"
            ],
            odgTacan:"Najmanje 11,5 tona", 
        },
        {
            tekstPitanja: "Iznad kolovoza javnog puta mora da postoji slobodan prostor u visini od najmanje:",
            odgovori:[
                "4,5 m",
                "5 m",
                "3 m",
                "3,5 m"
            ],
            odgTacan:"4,5 m", 
        },
    ]
    
 }

 

export const Test = ()=> {
    const classes = useStyles()

    const [test,setTest] = useState(dummyTest)
    const [odabraniOdgovor,setOdabraniOdgovor] = useState(null)
    const [brojTrenutnogPitanja,setBrojTrenutnogPitanja] = useState(0)
    const [brojTacnihOdgovora,setBrojTacnihOdgovora] = useState(0)
    const [odgovori,setOdgovori] = useState([])
    const odaberiOdgovor = (primljeniOdgovor)=> {
        const trenutnoPitanje = brojTrenutnogPitanja
        const tacanOdgovor = test.pitanja[trenutnoPitanje].odgTacan
        console.log("ODG",primljeniOdgovor)
        if(tacanOdgovor===primljeniOdgovor){
            setBrojTacnihOdgovora(brojTacnihOdgovora+1)     
            console.log("TACAN ODG")
        } 
        setOdabraniOdgovor(primljeniOdgovor)
        setTimeout(()=>{
            setOdabraniOdgovor(null)
            setBrojTrenutnogPitanja(brojTrenutnogPitanja+1)
            if(brojTrenutnogPitanja+1==test.brojPitanja){
            let procenat=0    
             procenat=brojTacnihOdgovora/test.brojPitanja
            console.log("Broj pitanja",test.brojPitanja)
            console.log("Broj tacnih",brojTacnihOdgovora)
            fetch("https://dry-fjord-95433.herokuapp.com/UradenTest",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify({
                    "BrojTesta":test.id,
                    "Kategorija":"B",
                    "BrojPitanja":test.brojPitanja,
                    "ProcenatTacnosti":procenat
                    
                })
            } )}
        },3000)
    }
    

    const dajDugme = (odgovor )=>{
        const trenutnoPitanje = brojTrenutnogPitanja
        const tacanOdgovor = test.pitanja[trenutnoPitanje].odgTacan
        if(odabraniOdgovor==null){
           return  <Button  className={classes.answer} onClick={()=>{odaberiOdgovor(odgovor)}} >{odgovor}</Button>
        }
        if(odgovor==tacanOdgovor)
            return     <Button  className={classes.correctAnswer}  >{odgovor}</Button>
        
        if(odgovor!=tacanOdgovor&& odgovor==odabraniOdgovor)
            return   <Button  className={classes.inccorectAnswer}  >{odgovor}</Button>
        
        return <Button className={classes.answer}  >{odgovor}</Button>
        



    }


     

   

    return (
        <div> 

            <NavBarUser/>
            <div className="test">
            <div className="naslov">Test broj {test.id}</div>
            {brojTrenutnogPitanja<test.brojPitanja && <div className='okvir'>
                <div className='pitanje'>
                  Pitanje {brojTrenutnogPitanja +1}. {test.pitanja[brojTrenutnogPitanja].tekstPitanja}
                </div>
                <div className={classes.pitanjaGrid}>
                    {test.pitanja[brojTrenutnogPitanja].odgovori.map((odgovor,index)=>{
                        return(
                            <div key={index} style={{width:"45%"}}>
                                {dajDugme(odgovor)}
                            </div>)

                    })}

                </div>
            </div>}
            {brojTrenutnogPitanja>=test.brojPitanja &&
           <div className="rezultatiTesta">
            
                {"Odgovorili ste tacno " + brojTacnihOdgovora+ " od ukupno "+ test.brojPitanja+" pitanja.\n"
                +"Procenat tačnosti je "+ Math.round((brojTacnihOdgovora/test.brojPitanja)*100)+"%"
                
                
                }    
            </div>}       
        </div>
        </div>
        
        )
}

