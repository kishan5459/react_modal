import './App.css'
import { Modal } from './components/Modal'
import { useState } from 'react'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="App">
        <h1>Hey! click on the button to open modal</h1>
        <button className='openModalBtn' onClick={() => setOpenModal(true)}>Open Modal</button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </>
  )
}

export default App
