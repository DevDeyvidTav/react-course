import { BlueSpan, Logo } from "../NavPC/styles";
import { Container, Content } from "./styles";
import {GiHamburgerMenu} from "react-icons/gi"

export function NavMobile(){
    return (
        <Container>
            <Content>
            <Logo>
                STUDY
                <BlueSpan>DEV</BlueSpan>
            </Logo>
            <GiHamburgerMenu 
            style={{background: "none", width: "auto", height: "25px"}}/>
            </Content>
        </Container>
    )
}