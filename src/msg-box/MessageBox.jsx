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
        setUsersData(data.data.chat);
      });
  }, []);

  return (
    <>
      <MessageBoxContainer>
        <Message />
      </MessageBoxContainer>
      <InputsBox>
        <form ref={formRef}>
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
