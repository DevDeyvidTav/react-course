import styled from "styled-components";


export const FooterContainer = styled.div `
    width: 100vw;
    max-width: 1140px;
    margin: 0 auto;
    @media (min-width: 768px) {
        background: none;
        display: flex;
        justify-content: space-between
    };
    height: 40vh;
    background-color: #202020;
    color: white;
    @media (max-width: 768px) {
        margin-top: 140vh ;
        padding: 20px; 
        display: flex;
        gap: 30px;
        height: 30vh;
    }

`
export const FooterContent = styled.div `
    padding-top: 40px;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    width: 25%;

    gap: 20px;
    background: none;
`
export const Link = styled.a `
    text-decoration: none;
    color: white;
    width: auto;
    background: none;
    display: flex;
    align-items: center;
    gap: 4px
`