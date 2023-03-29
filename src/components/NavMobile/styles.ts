import styled from "styled-components";



export const Container = styled.div `
    color: white;
    position: fixed;
    width: 100%;
    height: 5rem;
    background-color: #001735;
    @media (min-width: 767px){
        display: none;
    };
    z-index: 2;
`
export const Content = styled.div `
    color: white;
    display: flex;
    width: 500px;
    margin: 0 auto 0 auto;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: none;
    @media (max-width: 600px) {
        width: 360px;
    }
`