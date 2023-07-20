import { AuthInput, AuthLabel } from "./InputAuth.style";
import { InputBoxAuth } from "./InputAuth.style";

const InputAuth = (props) => {
  return (
    <InputBoxAuth>
      <AuthInput
        readOnly={props.readOnly}
        defaultValue={props.defaultValue}
        type="text"
        name="author"
        id="author"
        placeholder="Who are You?"
        required
        title="Enter your Name..."
      />
      {/* <AuthLabel htmlFor="author">Who are You?</AuthLabel> */}
    </InputBoxAuth>
  );
};

export default InputAuth;
