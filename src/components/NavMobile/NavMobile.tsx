import { BlueSpan, Logo } from "../NavPC/styles";
import { Container, Content } from "./styles";
import {GiHamburgerMenu} from "react-icons/gi"
import { Drawer } from "../Drawer";
import { useState } from "react";

export function NavMobile(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <Content>
            <Logo>
                STUDY
                <BlueSpan>DEV</BlueSpan>
            </Logo>
            <GiHamburgerMenu 
            style={{background: "none", width: "auto", height: "25px"}}
            onClick={() => setIsOpen(true)}/>
            </Content>
            <Drawer isOpen={isOpen}
            onClose={() => setIsOpen(false)}/>
        </Container>
    )
}