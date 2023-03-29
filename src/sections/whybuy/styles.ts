import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    background-image: url('/whybuy.png');
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        max-height: none;
        height: 1300px
    }
`
export const ResultsGrid = styled.div`
    display: flex;
    max-width: 1140px;
    height: 12rem;
    background-color: #202020 ;
    margin: 40px auto 0 auto;
    border-radius: 20px;
    border-top: 20px solid #202020;
    border-bottom: 20px solid #202020;
    z-index: 1;
    @media (max-width:768px) {
        max-width: 400px;
        height: 10rem;
        left: 1px;
        right: 1px;
        position: absolute;
        top: 105vh;
        
    }
    
`
interface TextProps {
    fontWeight: string;
    fontSize: string;
}

export const Text = styled.div <TextProps> `
    font-size: ${TextProps => TextProps.fontSize};
    width: auto;
    background: none;
    font-weight: ${TextProps => TextProps.fontWeight};
    @media (max-width: 758px) {
        font-size: 35px;
    }

`
export const Results = styled.div`
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
export const Content = styled.div`
    max-width: 1140px;
    height: 550px;
    margin: 120px auto 0 auto;
    background: none;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: start
    }
`
export const TextArea = styled.div`
    width: 33%;
    height: 100%;
    background: none;
    @media (max-width: 768px) {
        width: 90vw;
        margin: 150px auto 30px auto;
    }
`
export const CourseDetails = styled.div`
    width: 66%;
    height: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    gap:50px;
    @media (max-width: 768px) {
        width: 90%;
        gap: 200px
    }
`
export const Div = styled.div`
    display: flex;
    width: 100%; 
    height: 10rem;
    background: none;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`
export const DetailsText = styled.div `
    background: none;
    display: flex;
    width: 48%;
    gap: 10px;
    @media (max-width: 768px) {
        width: 90%;
    }

`