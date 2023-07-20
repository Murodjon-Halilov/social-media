import { useEffect, useState, useRef, useContext, useReducer } from "react";
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
  const { usersData, setUsersData } = useContext(MessageAndAuthContext);

  const formRef = useRef(null);

  useEffect(() => {
    // fetch(`http://192.168.0.107:5000/api/v1/ohio`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setUsersData(data.data.chats);
    //   });
    fetch(`http://localhost:3002/messages`)
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data.reverse());
      });
  }, []);

  const getFormData = () => {
    const dataForm = [...new FormData(formRef.current)];
    const dataObj = Object.fromEntries(dataForm);

    const date = new Date();

    const data = [
      {
        author: dataObj.author,
        message: dataObj.message,
        time: date,
      },
    ];
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = getFormData();
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

    const res = await fetch("http://localhost:3002/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data[0]),
    });

    const dataRes = await res.json();

    setUsersData([...usersData, dataRes]);

    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <>
      <MessageBoxContainer>
        {usersData &&
          usersData.map((user) => <Message key={user.id} userData={user} />)}
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
