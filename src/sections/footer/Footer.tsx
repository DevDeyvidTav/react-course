import { MdEmail, MdForum, MdSupport, MdWhatsapp, MdWork } from "react-icons/md";
import { SiDiscord, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { BlueSpan, Logo } from "../../components/NavPC/styles";
import { FooterContainer, FooterContent, Link } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <Logo>
                STUDY
                <BlueSpan>DEV</BlueSpan>
            </Logo>
            <FooterContent>
                <Link href="">
                    <MdWhatsapp style={{background: "none", width: "auto"}}/>
                    Whatsapp
                </Link>
                <Link href="">
                    <SiLinkedin
                    style={{background: "none", width: "auto"}}/>
                    LinkedIn
                </Link>
                <Link href="">
                    <SiGithub 
                    style={{background: "none", width: "auto"}}/>
                    Github
                </Link>
                <Link href="">
                    <SiInstagram
                    style={{background: "none", width: "auto"}}/>
                    Instagram
                </Link>
                <Link href="">
                    <SiDiscord
                    style={{background: "none", width: "auto"}}/>
                    Discord
                </Link>
            </FooterContent>
            <FooterContent>
            <Link href="">
                    <MdWork
                    style={{background: "none", width: "auto"}}/>
                    Trabalhe conosco
                </Link>
                <Link href="">
                    <MdEmail
                    style={{background: "none", width: "auto"}}/>
                    Email
                </Link>
                <Link href="">
                    <MdForum
                    style={{background: "none", width: "auto"}}/>
                    Fórum
                </Link>
                <Link href="">
                    <MdSupport
                    style={{background: "none", width: "auto"}}/>
                    Suporte
                </Link>
                
            </FooterContent>
        </FooterContainer>
    )
}