import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 440px;
    background-color: black;
    @media (max-width: 768px) {
        height: 600px;
    }

`
export const Content = styled.div`
    height: 80%;
    max-width: 1140px;
    margin: 100px auto 0 auto;
    @media (max-width: 768px) {
    width: 90vw;
    margin: 100px auto 0 auto;
    }
`
export const HabilitiesPainel = styled.div`
    height: 40%;
    gap: 20px;
    margin-top: 70px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    background: none;
    @media (max-width: 768px) {
        width: 100vw;
       overflow-x: hidden;
       gap: 5px;
       margin-top: 0 auto 20px auto;
    }
`
