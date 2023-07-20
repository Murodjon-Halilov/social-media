import { styled } from "styled-components";

export const MessageBox = styled.div`
  /* width: 90%; */
  /* display: inline-block; */
  /* max-width: 95%; */
  background: #fff;
  color: #000;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

    position: absolute;
    left: -1rem;
    bottom: 0;
  }
`;

export const AutherName = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #000;
  cursor: pointer;
`;

export const DateBox = styled.div`
  width: 10rem;
  height: 1.8rem;
  background: #00000089;
  border-radius: 10px;
  margin: 1rem auto;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
`;

export const TimeBox = styled.div`
  opacity: 0.8;
  font-size: 1rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.1rem;
`;

export const DeleteMsg = styled.button`
  font-size: 1.2rem;
  background: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;

  position: absolute;
  top: 0.5rem;
  right: -2rem;
`;

export const MainMsgBox = styled.div`
  width: 95%;
  position: relative;
`;

export const EditButton = styled.button`
  font-size: 1rem;
  color: white;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  position: absolute;
  top: 3rem;
  right: -2rem;
`;

export const MsgText = styled.p`
  word-wrap: break-word;
`;
