import { styled } from "styled-components";

export const ModalBox = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: #000000b9;
    position: absolute;
    z-index: -1;
`

export const Modal = styled.div`
    padding: 2rem;
    background: #fff;
    transform: translate(-50%, -50%);

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
`