import { styled } from "styled-components";

export const MessageBox = styled.div`
  /* width: 90%; */
  /* display: inline-block; */
  background: #ccc;
  color: #000;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;

  position: relative;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: #ccc;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

    position: absolute;
    left: -1rem;
    bottom: 0;
  }
`;

export const AutherName = styled.p`
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
`

export const TimeBox = styled.div`
    font-size: 1rem;
    position: absolute;
    right: .5rem;
    bottom: .1rem;
`