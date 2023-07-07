import InputAuth from "../input-box/InputAuth";
import InputMessage from "../input-box/InputMessage";
import Message from "../msg/Message";
import { InputsBox, MessageBoxContainer, Button, IconSend } from "./MessageBox.style";

const MessageBox = () => {
  return (
    <>
      <MessageBoxContainer>
        <Message />
      </MessageBoxContainer>
      <InputsBox>
          <form action="">
            <InputAuth />
            <InputMessage />
            <Button type="submit">
              <IconSend className="fa fa-paper-plane"></IconSend>
            </Button>
          </form>
      </InputsBox>
    </>
  );
};

export default MessageBox;
