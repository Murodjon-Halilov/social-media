import { styled } from "styled-components";

export const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: #000000b9;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999;
`;

export const Modal = styled.div`
  padding: 2rem;
  background: #fff;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
`;

export const ButtonEdit = styled.button`
  border: 0;
  outline: 0;
  background: #1e90ff;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 2rem auto;
  display: block;
`;

export const EditIconSend = styled.div`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;

export const EditModalTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 1rem 3rem;
  color: #1e90ff;
  text-align: center;
`;

export const EditModalInput = styled.textarea`
  width: 100%;
  font-size: 1.3rem;
  padding: 1rem;
  border: 3px solid #1e90ff;
  /* color: blue; */
  resize: none;
  border-radius: 5px;
  outline: none;

  &::-webkit-scrollbar {
    width: 0.5rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1e90ff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
