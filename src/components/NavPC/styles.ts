import styled from "styled-components";

export const Container = styled.div `
    color: white;
    position: fixed;
    width: 100%;
    height: 5rem;
    @media (max-width: 767px){
        display: none;
    };
    background-color: black;
    z-index: 4;
`
export const Content = styled.div `
    display: flex;
    max-width: 1140px;
    margin: 0 auto 0 auto;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: none;
`
export const NavItem = styled.a `
    width: auto;
    text-decoration: none;
    color: white;
    background: none;
`
export const BlueSpan = styled.span `
    color: #01316E;
    background: none;

`
export const Logo = styled.h1 `
    font-size: 25px;
    font-weight: 700;
    width: auto;
    padding: 5px;
    border-radius: 8px;
    background: none;
`

