import { InputBox, InputMessageUser, MessageLabel } from "./InputMessage.style";

const InputMessage = (props) => {
  return (
    <InputBox>
      <InputMessageUser
        onChange={props.onChange}
        value={props.value}
        placeholder="Start Messaging..."
        type="text"
        name="message"
        id="message"
        required
        title="Enter your message..."
      />
      {/* <MessageLabel htmlFor="message">Start Messaging...</MessageLabel> */}
    </InputBox>
  );
};

export default InputMessage;
