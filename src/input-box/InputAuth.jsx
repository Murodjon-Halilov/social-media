import { AuthInput, AuthLabel } from "./InputAuth.style";
import { InputBoxAuth } from "./InputAuth.style";

const InputAuth = () => {
  return (
    <InputBoxAuth>
      <AuthInput type="text" name="author" id="author" placeholder="Who are You?" />
      {/* <AuthLabel htmlFor="author">Who are You?</AuthLabel> */}
    </InputBoxAuth>
  );
};

export default InputAuth;
