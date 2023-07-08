import { InputBox, InputMessageUser, MessageLabel } from "./InputMessage.style";

const InputMessage = () => {
  return (
    <InputBox>
      <InputMessageUser type="text" name="message" id="message" />
      <MessageLabel htmlFor="message">Start Messaging...</MessageLabel>
    </InputBox>
  );
};

export default InputMessage;
