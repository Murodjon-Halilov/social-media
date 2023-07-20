import ReactDOM from "react-dom";
import { useContext, useRef, useState } from "react";
import InputAuth from "../input-box/InputAuth";
import InputMessage from "../input-box/InputMessage";
import {
  ButtonEdit,
  EditIconSend,
  EditModalInput,
  EditModalTitle,
  Modal,
  ModalBox,
  Overlay,
} from "./EditModal.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const BackDrop = ({ closeModal }) => {
  return <Overlay onClick={closeModal} />;
};

const ModalOverlay = ({ closeModal, userData }) => {
  const { setUsersData } = useContext(MessageAndAuthContext);

  const [message, setMessage] = useState(userData.message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = getFormData();
    // const sendJSON = async (url, body) => {
    //   const res = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });

    //   await res.json();
    //   forceRefresh()
    // };

    const res = await fetch(`http://localhost:3002/messages/${userData.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      fetch(`http://localhost:3002/messages`)
        .then((res) => res.json())
        .then((data) => {
          setUsersData(data.reverse());
        });
    }

    closeModal();
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  // const getFormData = () => {
  //   const dataForm = [...new FormData(formRef.current)];
  //   const dataObj = Object.fromEntries(dataForm);

  //   const date = new Date();

  //   const data = [
  //     {
  //       author: dataObj.author,
  //       message: dataObj.message,
  //       time: date,
  //     },
  //   ];
  //   return data;
  // };

  return (
    <Modal>
      <EditModalTitle>Editting your message...</EditModalTitle>
      <form onSubmit={handleSubmit}>
        {/* <InputAuth readOnly defaultValue={userData.author} />
        <InputMessage value={message} onChange={handleMessage} /> */}
        <EditModalInput
          name="edit-message-input"
          value={message}
          id="input-msg"
          cols="30"
          rows="10"
          onChange={handleMessage}
          required
        ></EditModalInput>
        <ButtonEdit>
          <EditIconSend>Update Message</EditIconSend>
        </ButtonEdit>
      </form>
    </Modal>
  );
};

const EditModal = ({ closeModal, userData }) => {
  return (
    <ModalBox>
      {ReactDOM.createPortal(
        <>
          <BackDrop closeModal={closeModal} />
          <ModalOverlay closeModal={closeModal} userData={userData} />
        </>,
        document.getElementById("portal")
      )}
    </ModalBox>
  );
};

export default EditModal;
