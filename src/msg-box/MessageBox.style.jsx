import { styled } from "styled-components";

export const MessageBoxContainer = styled.div`
    width: 50rem;
    height: 37rem;
    border: 3px solid #fff;
    border-radius: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 1rem auto;
    padding: 3rem;
    background: #ffffff49;

    &::-webkit-scrollbar {
        display: none;
    }
`