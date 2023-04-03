import { BlueSpan, Container, Content, Logo, NavItem } from "./styles";

export function NavPC(){
    return (
        <Container>
           <Content>
             <NavItem href="#">
                <Logo>
                STUDY
                <BlueSpan>DEV</BlueSpan>
                </Logo>
             </NavItem>
             <NavItem href="#whybuy">
                Por quê me inscrever?
             </NavItem>
             <NavItem href="#metodology">
                Metodologia
             </NavItem>
             <NavItem href="#about">
                Sobre
             </NavItem>
             <NavItem href="#planes">
                Planos
             </NavItem>
           </Content>
        </Container>
    )
}