import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 7rem;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/home-img.png');
  background-size: cover;
  background-position: center;
  @media (min-width: 769px){
        display: none;
  }
`;

export const TextArea = styled.div`
  margin: 0 auto 0 auto;
  width: 95vw;
  text-decoration: none;
  color: white;
  padding: 15px;
  background: none;
  position: relative;
  z-index: 1; 
`;

export const Title = styled.h2`
  font-size: 35px;
  width: 80vw;
  text-decoration: none;
  color: white;
  margin-bottom: 30px;
  font-weight: 900;
  background: none;
  margin: 0 28px 0 28px;
  text-align: start;
  position: relative;
  z-index: 1; 
`;
export const Button = styled.button`
    width: 86vw;
    padding: 10px 20px ;
    background-color: #01316E;
    font-size: 25px;
    font-weight: 700;
    color: white;
    margin: 40px 0 0 29px;
    border-radius: 7px;
    :hover{
        background-color: #13357E ;
        transition: 0.5s
    }
`