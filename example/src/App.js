import React, {useState, useEffect} from 'react'

import { Modal } from '@devus/devus-react-components'
import '@devus/devus-react-components/dist/index.css'

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    modalIsOpen && document.querySelector('#modal-btn').addEventListener('click', () => setModalIsOpen(false));
  }, [modalIsOpen]);

  function handleClick(e){
    e.preventDefault();
    setModalIsOpen(true);
  }

  return (
    <div>
      {modalIsOpen && <Modal type = 'alert' message = 'This is a sample message ga ebbd hdbfbf hs hdbd dhe dhdbhd' isOpen={modalIsOpen}/>}
      <button type='submit' onClick={handleClick}>Abc</button>
    </div>
  );
}

export default App
