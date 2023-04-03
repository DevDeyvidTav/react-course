import styled, { keyframes } from "styled-components";

const Button = styled.a `
    width: 80px;
    height: 80px;
    position: fixed;
    top: 85vh;
    left: 94vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.8) ;
    background-color: #202020;
    z-index: 4;
    border-radius: 100%;
    cursor: pointer;
    :hover{
        background-color: #474747;
        transition: 0.5s ease-out;
        width: 85px;
        height: 85px;
        
    }
    @media (max-width: 768px) {
        left: 78vw;
    }
`
const moveUpAndDown = keyframes`
  0% {
    top: 85vh;
  }
  50% {
    top: 84vh;
  }
  100% {
    top: 85vh;
  }
`;
export const AnimatedButton = styled(Button)`
  animation: ${moveUpAndDown} 1.5s infinite;
`;
