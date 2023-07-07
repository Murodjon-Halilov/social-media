import { styled } from "styled-components";

export const MessageBox = styled.div`
    /* width: 90%; */
    /* display: inline-block; */
    background: #000;
    color: #fff;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
    position: relative;
    margin-top: 1rem;

    &::before {
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        background: #000;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);

        position: absolute;
        left: -1rem;
        bottom: 0;
    }
`

export const AutherName = styled.p`
    font-size: .9rem;
    color: #fff;
    cursor: pointer;
`