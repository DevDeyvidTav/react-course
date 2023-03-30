import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';

interface ModalWrapperProps {
    isOpen: boolean;
}
 export const StyledPhoneInput = styled(InputMask)`
    color: white;
    border: none;
    border-bottom: 1px solid #e3e3e3;
    font-size: 16px;
    padding: 10px;
    width: 100%;

  &:focus {
    outline: none;
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ModalWrapper = styled.div <ModalWrapperProps>`
    color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalContent = styled.div`

  background-color: #202020;
  width: 400px;
  height: 500px;
  border-radius: 4px;
  padding: 20px;
  h2{
    background: none;
  };
  p{
    background: none;
  };
  form{
    margin-top: 20px;
    background: none;
    input{
        background: none;
    };
    label{
        background: none;
    };
  }
`;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: transparent;
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  color: white;

  &:focus {
    outline: none;
    border-bottom: 2px solid #0077ff;
  }

  &::placeholder {
    color: #999;
    font-size: 0.9rem;
  }
`;
 export const StyledButton = styled.button`
  background-color: #0077ff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 20px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;
  &:active {
    animation: ${pulse} 0.5s;
  }

  &:hover {
    background-color: #005ae6;
  }
`;
export const StyledCancelButton = styled.button`
  background-color: #f2f2f2;
  border: none;
  color: #707070;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 20px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d9d9d9;
    color: #202020
  }

  &:active {
    animation: ${pulse} 0.5s;
  }
`;
