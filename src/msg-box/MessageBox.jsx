import { useEffect, useState, useRef, useContext } from "react";
import InputAuth from "../input-box/InputAuth";
import InputMessage from "../input-box/InputMessage";
import Message from "../msg/Message";
import {
  InputsBox,
  MessageBoxContainer,
  Button,
  IconSend,
} from "./MessageBox.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const MessageBox = () => {
  const { setUsersData } = useContext(MessageAndAuthContext);
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetch(`http://192.168.0.107:5000/api/v1/ohio`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setUsersData(data.data.chats);
      });
  }, []);

  const getFormData = () => {
    const dataForm = [...new FormData(formRef.current)];
    const dataObj = Object.fromEntries(dataForm);
    const date = new Date()

    const data = [
      {
        author: dataObj.author,
        message: dataObj.message,
        time: date
      },
    ];
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = getFormData();

    const sendJSON = async (url, body) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const newData = await res.json();
      
      setNewData(newData)
      return newData
    };

    await sendJSON("http://192.168.0.107:5000/api/v1/ohio", data);

    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <>
      <MessageBoxContainer>
        <Message newData={newData ? newData.data.Chat : ''}/>
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
