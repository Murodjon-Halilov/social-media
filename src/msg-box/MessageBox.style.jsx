import { styled } from "styled-components";

export const MessageBoxContainer = styled.div`
  width: 50rem;
  height: 37rem;
  border: 3px solid #fff;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 2.5rem auto !important;
  padding: 3rem;
  background: #ffffff49;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputsBox = styled.div`
  width: 50rem;
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    background: transparent;
`

export const IconSend = styled.i`
    font-size: 1.8rem;
    color: #fff;
    transform: rotate(15deg);
    margin: .5rem 0 0 1.2rem;
    cursor: pointer;
    text-shadow: 1px 4px 8px #ffffff82;
    transition: all .3s ease-in-out;

    &:active {
      text-shadow: 2px 3px 2px #ffffff;
    }
`