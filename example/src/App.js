import React, {useState, useEffect} from 'react'

import { Modal } from '@devus/devus-react-components'
import '@devus/devus-react-components/dist/index.css'

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    modalIsOpen && document.querySelector('#modal-btn').addEventListener('click', () => setModalIsOpen(false));
  }, [modalIsOpen]);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Abc</button>
      {modalIsOpen && <Modal type = 'error' message = 'This is a sample message ga ebbd hdbfbf hs hdbd dhe dhdbhd' isOpen={modalIsOpen}/>}
    </div>
  );
}

export default App
