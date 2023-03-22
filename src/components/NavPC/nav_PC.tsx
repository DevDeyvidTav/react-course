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
             <NavItem href="#">
                Por quê me inscrever?
             </NavItem>
             <NavItem href="#">
                Metodologia
             </NavItem>
             <NavItem href="#">
                Sobre
             </NavItem>
             <NavItem href="#">
                Planos
             </NavItem>
             <NavItem href="#">
                Avaliações
             </NavItem>
           </Content>
        </Container>
    )
}