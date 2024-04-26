import React from 'react'
import './Modal.css'
import { useEffect } from 'react'

export const Modal = ({ closeModal }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);
  return (
    // for closing modal by clicking outside of modal
    <div className='modalBackground' onClick={() => closeModal(false)}>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="title">
                <h1>Are You Sure you Want to Continue ?</h1>
            </div>
            <div className="body">
                <p>
                    The next page is awesome! You should move forward you will enjoy it
                </p>
            </div>
            <div className="footer">
                <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
