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
        <div>
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque a unde corporis voluptates fugiat quibusdam quidem iure, voluptatum est veritatis illum? Repellat, blanditiis laboriosam numquam a rerum cumque facilis.
        </div>
      </div>
    </>
  )
}

export default App
