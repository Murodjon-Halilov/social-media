import { styled } from "styled-components";

export const MessageLabel = styled.label`
    font-size: 1.3rem;
    color: #fff;
    transition: all .3s ease-in-out;

    position: absolute;
    right: 43rem;
    bottom: 3rem;

    z-index: -1;
`

export const InputMessageUser = styled.input`
  width: 27.5rem;
  outline: none;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: transparent;
  font-size: 1.2rem;
  color: white;
  margin-left: 2rem;

  &:focus + ${MessageLabel} {
    right: 46.5rem;
    bottom: 5.5rem;
    font-size: 1rem;
  }
`;