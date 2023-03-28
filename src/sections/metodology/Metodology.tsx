import { AiFillHtml5 } from "react-icons/ai";
import { TextAreaComponent } from "../../components/Typography/styles";
import { Container, Content, HabilitiesPainel } from "./styles";
import { DiCss3, DiReact, DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs, SiPostgresql, SiPrisma } from "react-icons/si";

export function Metodology() {
    return (
        <Container>
            <Content>
                <TextAreaComponent
                    type="title"
                    textColor="white"
                    width="3auto"
                >
                    Metodololia do
                    <span style={{ color: "#01316E" }}> curso</span>
                </TextAreaComponent>
                <TextAreaComponent type="text" textColor="white" margin="70px 0 0 0">
                    Com uma abordagem didática e acessível, nosso curso cobre desde os
                    conceitos básicos de programação até as tecnologias mais avançadas do
                    mercado, como HTML, Css, JavaScript, TypeScript, React, Next, Node e muito
                    mais. Você aprenderá com exemplos práticos, projetos reais e exercícios
                    desafiadores, tudo isso com o suporte de nossos instrutores experientes e
                    uma comunidade engajada de alunos.
                </TextAreaComponent>
                <HabilitiesPainel>
                    <AiFillHtml5 style={{ color: "white", height: "80px" }} />
                    <DiCss3 style={{ color: "white", height: "80px" }} />
                    <IoLogoJavascript style={{ color: "white", height: "80px" }} />
                    <SiNextdotjs style={{ color: "white", height: "80px" }} />
                    <SiTypescript style={{ color: "white", height: "80px" }} />
                    <DiNodejs style={{ color: "white", height: "80px" }} />
                    <SiPrisma style={{ color: "white", height: "80px" }} />
                    <SiPostgresql style={{ color: "white", height: "80px" }} />
                    <DiReact style={{ color: "white", height: "80px" }} />
                    <AiFillHtml5 style={{ color: "white", height: "80px" }} />
                </HabilitiesPainel>
            </Content>
        </Container>
    )
}