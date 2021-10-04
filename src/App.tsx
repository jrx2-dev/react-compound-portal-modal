import { useState } from "react";

import "./App.css";

import Modal from "./components/Modal/Modal";
import ModalTitle from "./components/Modal/ModalTitle/ModalTitle";
import ModalContent from "./components/Modal/ModalContent/ModalContent";
import ModalButtons from "./components/Modal/ModalButtons/ModalButtons";

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClose = () => setOpenModal(false);
  const onAccept = () => window.alert("Clicked!");

  return (
    <div className="App">
      <div>
        <button onClick={() => setOpenModal((value) => !value)}>
          Show modal
        </button>
      </div>
      <Modal showModal={openModal} onClose={onClose} clickBackdropClose>
        <ModalTitle title="This is a title for the modal. It can be very very long." />
        <ModalContent
          text={`This would be the content of the modal,
        it can also be a very long text.
        All the components of the modal can receive children
        and replace their default appearance and behavior.`}
        />
        <ModalButtons handleOk={onAccept} okText="Allow" showCancel />
      </Modal>
    </div>
  );
};

export default App;
