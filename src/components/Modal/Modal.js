import React from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal  = (props) => {

    if (!props.selectedGif) {
      return <div></div>;
    }
    
    return (

      <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        
        <div
          className="modal" 
            style={{ 
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0'
          }}>
           
            {/* <img src={ props.selectedGif.images.original.url } 
          alt={props.selectedGif.images.title} /> */}

            {props.children}

          <button className="modal-button" onClick={() => props.modalClosed()}>close</button>
        </div>

      </div>
    );
  }

export default Modal;