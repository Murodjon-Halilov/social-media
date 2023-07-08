import { useEffect, useState, useRef } from "react";
import InputAuth from "../input-box/InputAuth";
import InputMessage from "../input-box/InputMessage";
import Message from "../msg/Message";
import {
  InputsBox,
  MessageBoxContainer,
  Button,
  IconSend,
} from "./MessageBox.style";

const MessageBox = () => {
  const [data, setData] = useState(null);
  const formRef = useRef(null);

  const sendJSON = async (url, uploadData) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch(`http://192.168.0.107:5000/api/v1/ohio`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data) {
    console.log(data.data.chat);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    if (formRef) {
      console.log(new FormData(e.target));
    }
  };

  return (
    <>
      <MessageBoxContainer>
        <Message />
      </MessageBoxContainer>
      <InputsBox>
        <form ref={formRef} onSubmit={handleSubmit}>
          <InputAuth />
          <InputMessage />
          <Button>
            <IconSend className="fa fa-paper-plane"></IconSend>
          </Button>
        </form>
      </InputsBox>
    </>
  );
};

export default MessageBox;
