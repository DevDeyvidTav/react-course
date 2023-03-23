import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    background-image: url('/whybuy.png');
    background-repeat: no-repeat;
    background-size: cover;

`
export const ResultsGrid = styled.div `
    display: flex;
    max-width: 1140px;
    height: 12rem;
    background-color: #202020 ;
    margin: 40px auto 0 auto;
    border-radius: 20px;
    border-top: 20px solid #202020;
    border-bottom: 20px solid #202020;
    z-index: 1;
    
`
export const Results = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid white;
    width: 33%;
    height: 100%;
    background: none;
    color: white;
`
export const Content = styled.div `
    max-width: 1140px;
    height: 550px;
    margin: 120px auto 0 auto;
    background: none;
    display: flex;
    justify-content: space-between;
`
export const TextArea = styled.div `
    width: 33%;
    height: 100%;
    background: none;
`
export const CourseDetails = styled.div `
    width: 66%;
    height: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    gap:50px
`