import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './popup.css';


const ControlledPopup = () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} className="my-popup">
        <div className="popup">
            <div className="container">
                <div className="row">
                    <div className="col">

                    <div className="field">Datum časa: </div>

                    <div className="field">Vrijeme časa: </div>

                    <div className="field">Instruktor: </div>

                    <div className="field">Vozilo: </div>

                    <div className="field">Kategorija: </div>

                    <button onClick={closeModal}>Otkaži</button>

                    </div>
                    <div className="col">

                        <div className="field">
                        <input type="text" /></div>

                        <div className="field">
                        <input type="text" /></div>
                        
                        <div className="field">
                        <div className="fieldsOther">instruktora</div></div>

                        <div className="field">
                        <div className="fieldsOther">naziv vozila</div></div>
                        
                        <div className="field">
                        <div className="fieldsOther">skracenica kategorije</div></div>

                        <button>Potvrdi</button>

                    </div>
                </div>
            </div>
                
        </div>
      </Popup>
    </div>
  );
};

export default ControlledPopup;