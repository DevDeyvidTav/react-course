import { Container, Content, CourseDetails, DetailsText, Div, Results, ResultsGrid, Text, TextArea } from "./styles";
import { AiOutlineFileDone, AiOutlineSolution } from "react-icons/ai"
import { MdLiveTv, MdPeopleAlt } from "react-icons/md"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function WhyBuy() {
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
      })
    return (
        <Container>
            <ResultsGrid data-aos="fade-up">
                <Results>
                    <Text fontSize="50px" fontWeight="900">
                        +30mil
                    </Text>
                    <p style={{ background: "none", textAlign: "center" }}>
                        alunos formados
                    </p>
                </Results>
                <Results>
                    <Text fontSize="50px" fontWeight="900">
                        91%
                    </Text>
                    <p style={{ background: "none", textAlign: "center" }}>
                        dos nossos alunos estão empregados
                    </p>
                </Results>
                <Results>
                    <Text fontSize="50px" fontWeight="900">
                        35%
                    </Text>
                    <p style={{ background: "none", textAlign: "center" }}>
                        são seniors e plenos
                    </p>
                </Results>
            </ResultsGrid>
            <Content>
                <TextArea data-aos="fade-up">
                    <p
                        style={{ fontWeight: 900, background: 'none', fontSize: "28px", color: "white" }}>
                        O StudyDev é um programa pensado para te colocar
                        em uma vaga incrível nas principais empresas de tecnologia
                    </p>
                </TextArea>
                <CourseDetails >
                    <Div>
                        <DetailsText data-aos="fade-up">
                            <AiOutlineFileDone style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Você terá acesso a um conteúdo completo sobre os fundamentos e sobre as principais técnicas e ferramentas da área.
                            </p>
                        </DetailsText>
                        <DetailsText data-aos="fade-up">
                            < MdLiveTv style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Também terá momentos ao vivo com professores especialistas do mercado, em que poderá tirar dúvidas e evoluir nos cases práticos.
                            </p>
                        </DetailsText>
                    </Div>
                    <Div>
                        <DetailsText data-aos="fade-up">
                            <AiOutlineSolution style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Ao longo de todo o curso, mentores de carreira irão te acompanhar e dar dicas de como conquistar de forma rápida uma vaga na área.
                            </p>
                        </DetailsText>
                        <DetailsText data-aos="fade-up">
                            <MdPeopleAlt style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Você terá acesso vitalício à comunidade StudyDev, onde poderá se conectar com pessoas de diferentes áreas e construir um networking sólido.
                            </p>
                        </DetailsText>
                    </Div>
                </CourseDetails>
            </Content>
        </Container>
    )
}