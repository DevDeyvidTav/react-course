import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding-top: 8rem;
   
`
export const Content = styled.div `
    font-weight: 300;
    margin: 0 auto 0 auto;
    max-width: 1140px;
    height: 520px;
    display: flex;
    justify-content:space-between;
    font-size: 19px;
`
export const Title = styled.h2 `
    font-size: 38px;
    width: auto;
    text-decoration: none;
    color: white;
    margin-bottom: 30px;
    font-weight: 900;
`
export const TextArea = styled.div `
    width: 48%;
    height: 100%;
    text-decoration: none;
    color: white;
    padding: 15px
`
export const Button = styled.button `
    width: auto;
    padding: 10px 20px ;
    background-color: #01316E;
    font-size: 25px;
    font-weight: 700;
    color: white;
    margin-top: 40px;
    border-radius: 7px;
    :hover{
        background-color: #13357E ;
        transition: 0.5s
    }
`
