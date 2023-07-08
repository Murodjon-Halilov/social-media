import { styled } from "styled-components";

export const MessageLabel = styled.label`
width: 100%;
    font-size: 1.3rem;
    color: #fff;
    transition: all .3s ease-in-out;

    position: absolute;
    top: .3rem;
    left: 2.5rem;
    z-index: -1;
`

export const InputMessageUser = styled.input`
  width: 27.5rem;
  outline: none;
  border: 2px solid red;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  color: black;
  margin-left: 2rem;

  &:focus:invalid + ${MessageLabel} {
    top: -1.5rem;
    font-size: 1rem;
  }

  &:focus + ${MessageLabel} {
    top: -1.5rem;
    font-size: 1rem;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: inline-block;
`