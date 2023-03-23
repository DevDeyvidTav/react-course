import { Container, Content, CourseDetails, Results, ResultsGrid, TextArea } from "./styles";
import { AiOutlineFileDone, AiOutlineSolution } from "react-icons/ai"
import { MdLiveTv, MdPeopleAlt } from "react-icons/md"

export function WhyBuy() {
    return (
        <Container>
            <ResultsGrid>
                <Results>
                    <p style={{ background: "none", textAlign: "center", fontSize: "50px", fontWeight: "900" }}>
                        30 mil
                    </p>
                    <p style={{ background: "none", textAlign: "center" }}>
                        alunos formados
                    </p>
                </Results>
                <Results>
                    <p style={{ background: "none", textAlign: "center", fontSize: "50px", fontWeight: "900" }}>
                        91%
                    </p>
                    <p style={{ background: "none", textAlign: "center" }}>
                        dos nossos alunos estão empregados
                    </p>
                </Results>
                <div style={{ color: "white" ,background: "none", display: "flex", flexDirection: "column", maxWidth: "380px", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ background: "none", textAlign: "center", fontSize: "50px", fontWeight: "900" }}>
                        35%
                    </p>
                    <p style={{ background: "none", textAlign: "center" }}>
                        são seniors e plenos
                    </p>
                </div>
            </ResultsGrid>
            <Content>
                <TextArea>
                    <p
                        style={{ fontWeight: 900, background: 'none', fontSize: "28px", color: "white" }}>
                        O StudyDev é um programa pensado para te colocar
                        em uma vaga incrível nas principais empresas de tecnologia
                    </p>
                </TextArea>
                <CourseDetails>
                    <div
                        style={{ display: "flex", width: '100%', height: '10rem', background: "none", justifyContent: "space-between" }}>
                        <div style={{ background: "none", display: "flex", width: "48%", gap: "10px" }}>
                            <AiOutlineFileDone style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Você terá acesso a um conteúdo completo sobre os fundamentos e sobre as principais técnicas e ferramentas da área.
                            </p>
                        </div>
                        <div style={{ background: "none", display: "flex", width: "48%", gap: "10px" }}>
                            < MdLiveTv style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Também terá momentos ao vivo com professores especialistas do mercado, em que poderá tirar dúvidas e evoluir nos cases práticos.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ display: "flex", width: '100%', height: '10rem', background: "none", justifyContent: "space-between" }}>
                        <div style={{ background: "none", display: "flex", width: "48%", gap: "10px" }}>
                            <AiOutlineSolution style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Ao longo de todo o curso, mentores de carreira irão te acompanhar e dar dicas de como conquistar de forma rápida uma vaga na área.
                            </p>
                        </div>
                        <div style={{ background: "none", display: "flex", width: "48%", gap: "10px" }}>
                            <MdPeopleAlt style={{ color: "white", background: "none", width: "100%", height: "50%", }} />
                            <p style={{ background: "none", fontSize: "18px", fontWeight: "700", color: "white" }}>
                                Você terá acesso vitalício à comunidade StudyDev, onde poderá se conectar com pessoas de diferentes áreas e construir um networking sólido.
                            </p>
                        </div>
                    </div>
                </CourseDetails>
            </Content>
        </Container>
    )
}