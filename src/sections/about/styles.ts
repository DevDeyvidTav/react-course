import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 110vh;
    max-height: 800px;
    background-color: white;
    @media (max-width: 768px) {
        display: none;
    }
`
export const Content = styled.div `
    max-width: 1140px;
    height: 80%;
    max-height: 900px;
    background: none;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
export const ResultGrid = styled.div `
    width: 100%;
    height: 12rem;
    max-height: 900px;
    background: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07) ;
    border: 3px solid #01316E;

    @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


export const Mob_Container = styled.div `
    width: 100vw;
    height: 130vh;
    background-color: white;
    @media (min-width: 769px) {
        display: none
    }
`

