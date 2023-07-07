import { styled } from "styled-components";

export const AuthLabel = styled.label`
  font-size: 1.3rem;
  color: #fff;
  transition: all 0.3s ease-in-out;

  position: absolute;
  left: 24rem;
  bottom: 3rem;
  z-index: -1;
`;

export const AuthInput = styled.input`
  outline: none;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: transparent;
  font-size: 1.2rem;
  color: white;

  &:focus + ${AuthLabel} {
    bottom: 5.5rem;
    left: 23rem;
    font-size: 1rem;
  }
`;
