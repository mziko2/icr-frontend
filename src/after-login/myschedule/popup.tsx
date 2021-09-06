import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './popup.css';
import { Button } from 'rsuite';


const ControlledPopup = () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Zakaži čas
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} className="my-popup">
        <div className="conatiner">
          <div className="row">
              <div className="col">
              <div className="popupField">Datum časa: </div>
              </div>
              <div className="col-md-7">
              <input type="date" className="input-group-text popupRight" />
              </div>
          </div>
          <div className="row">
              <div className="col">
              <div className="popupField">Vrijeme časa: </div>
              </div>
              <div className="col-md-7">
              <input type="time" className="input-group-text popupRight" />
              </div>
          </div>
          <div className="row">
              <div className="col">
              <div className="popupField">Instruktor: </div>
              </div>
              <div className="col-md-7">
              <div className="fieldsOther popupRight">Senad Bašic</div>
              </div>
          </div>
          <div className="row">
              <div className="col">
              <div className="popupField">Vozilo: </div>
              </div>
              <div className="col-md-7">
              <div className="fieldsOther popupRight">Opel Corsa</div>
              </div>
          </div>
          <div className="row">
              <div className="col">
              <div className="popupField">Kategorija: </div>
              </div>
              <div className="col-md-7">
              <div className="fieldsOther popupRight">B</div>
              </div>
          </div>
          <div className="row">
              <div className="col">
              <Button className="otkaziAAA" onClick={closeModal}>Otkaži</Button>
              </div>
              <div  className="col">
              <Button className="potvrdi" >Potvrdi</Button>
              </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ControlledPopup;