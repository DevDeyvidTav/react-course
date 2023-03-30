import React, { useState } from 'react';
import styled from 'styled-components';
import { BlueSpan, Logo } from '../NavPC/styles';

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
`;
interface DrawerWrapperProps {
    isOpen: boolean;
}
const DrawerWrapper = styled.div <DrawerWrapperProps>`
  position: absolute;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-320px'};
  bottom: 0;
  width: 320px;
  padding: 16px;
  background-color: #202020;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out;
`;

const DrawerHeader = styled.h3`
  margin-top: 0;
`;

const DrawerBody = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: none;
  a{
    margin-left: 10px;
    background: none;
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 300;
    display: block;
  }
`;

const DrawerFooter = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  background: none;
`;

interface DrawerButtonProps {
    primary?: boolean
}

const DrawerButton = styled.button <DrawerButtonProps>`
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.primary ? '#00bfff' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#081C3F'};
  border: ${props => props.primary ? 'none' : '2px solid black'};
`;

export const Drawer = ({ isOpen, onClose }: any) => {


    const toggleDrawer = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <DrawerContainer>
                    <DrawerWrapper isOpen={isOpen}>
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                            <a  onClick={onClose}
                                href="#">
                                <Logo>
                                    STUDY
                                    <BlueSpan>DEV</BlueSpan>
                                </Logo>
                            </a>
                            <a  onClick={onClose}
                                href="/#whybuy">
                                Porque me inscrever?
                            </a>
                            <a  onClick={onClose}
                                href="/#metodology">
                                Metodologia
                            </a>
                            <a  onClick={onClose}
                                href="/#aboutmob">
                                Sobre nós
                            </a>
                            <a  onClick={onClose}
                                href="/#planes">
                                Nossos planos
                            </a>
                        </DrawerBody>
                        <DrawerFooter>
                            <DrawerButton onClick={toggleDrawer}>fechar</DrawerButton>
                        </DrawerFooter>
                    </DrawerWrapper>
                </DrawerContainer>
            )}
        </>
    );
};
