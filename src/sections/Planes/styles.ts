import styled from "styled-components";

export const content = styled.div `
    max-width: 1140px;
    height: 80%;
    margin: 0 auto;


`
export const GridPlane = styled.div`
    width: 300px;
    height: 600px;
    background-color: #202020;
    border-radius: 30px;
    padding: 30px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2) ;
`
export const PlaneText = styled.div`
    width: auto;
    color: white;
    font-size: 18px;
    font-weight: 500;
    background: none;
    display: flex ;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

`
export const PlaneTitle = styled.div`
    width: auto;
    color: white;
    font-size: 28px;
    font-weight: 500;
    background: none;
    margin-bottom: 10px;


`
export const PlanePrice = styled.div`
    width: auto;
    color: white;
    font-size: 42px;
    font-weight: 700;
    background: none;
    margin-bottom: 70px;

`
export const PlaneButtonRequest = styled.button`
    width: auto;
    margin-top: 40px;
    color: white;
    font-size: 25px;
    font-weight: 500;
    background-color: #01316E;
    padding: 5px 47px;
    border-radius: 8px;
    :hover{
        background-color: #014e6d;
        transition: 0.5s;
        padding: 5px 55px;

    }

`



