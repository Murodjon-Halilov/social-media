import { styled } from "styled-components";

export const AuthLabel = styled.label`
  width: 100%;
  font-size: 1.3rem;
  color: #fff;
  transition: all 0.3s ease-in-out;

  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
  z-index: -1;
`;

export const AuthInput = styled.input`
  outline: none;
  border: 2px solid blue;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  color: black;
  box-shadow: 0px 0px 45px white;

  &:focus:invalid + ${AuthLabel} {
    top: -1.5rem;
    font-size: 1rem;
  }

  &:focus + ${AuthLabel} {
    top: -1.5rem;
    font-size: 1rem;
  }
`;

export const InputBoxAuth = styled.div`
  position: relative;
  display: inline-block;
`;
