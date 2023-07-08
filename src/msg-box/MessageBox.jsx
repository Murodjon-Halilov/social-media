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
  const formRef = useRef(null);

  useEffect(() => {
    fetch(`http://192.168.0.107:5000/api/v1/ohio`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setUsersData(data.data.chats);
      });
  }, [data]);

  const getFormData = () => {
    const dataForm = [...new FormData(formRef.current)]
    const dataObj = Object.fromEntries(dataForm)
    
    const data = [
      {
        author: dataObj.author,
        message: dataObj.message
      }
    ]
    console.log(data)
    return data
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = getFormData()

    const sendJSON = async (url, body) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      console.log(res)

      // if(!res.ok) alert(new Error('mazgi'))

      const data = await res.json()

      console.log(data)
    }

    await sendJSON('http://192.168.0.107:5000/api/v1/ohio', data)
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
