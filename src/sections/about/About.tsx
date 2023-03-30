import { TextAreaComponent } from "../../components/Typography/styles";
import { Container, Content, ResultGrid } from "./styles";

export function About() {
    return (
        <Container id="about">
            <TextAreaComponent
                padding="60px 0 40px 0"
                textColor="#01316E"
                width="1140px"
                type="title"
                margin="0 auto 0 auto">
                Como surgimos?
            </TextAreaComponent>
            <Content>
                <TextAreaComponent
                    width="40%"
                    type="text"
                    textColor="#707070">
                    Este curso de programação foi desenvolvido com base na experiência e conhecimento adquiridos ao longo de anos de estudo e prática na área de tecnologia da informação.
                    A ideia de criar esse curso surgiu da necessidade de oferecer um conteúdo completo e atualizado para quem deseja aprender programação de forma prática e eficiente. Para isso, foram realizadas diversas pesquisas de mercado e análises de tendências na área de TI, visando identificar as habilidades e competências mais demandadas pelo mercado de trabalho.
                    O resultado desse trabalho foi um curso completo e abrangente, que oferece aos alunos conhecimentos teóricos e práticos sobre programação, desde os conceitos básicos até as tecnologias mais avançadas. Além disso, o curso conta com atividades práticas e projetos reais para que os alunos possam aplicar os conhecimentos adquiridos e desenvolver suas habilidades.
                    A equipe responsável pelo desenvolvimento do curso é composta por profissionais altamente capacitados e experientes na área de programação e tecnologia da informação. Todo o conteúdo foi cuidadosamente elaborado para garantir a qualidade e eficácia do ensino, e está sujeito a direitos autorais.
                </TextAreaComponent>
                <div style={{ width: '50%', padding: "50px 0 25px 0", height: "100%", background: 'none', gap: "20px", display: "flex", flexDirection: "column" }}>
                    <ResultGrid>
                        <TextAreaComponent 
                        type="title" 
                        textColor="#707070"
                        width="auto">
                            +30mil alunos formados
                        </TextAreaComponent>
                        <TextAreaComponent
                         type="text"
                         textAlign="center"
                         width="100%"
                         textColor="#01316E">
                            Além do STUDYDEV Experience, impactamos vidas por meio das academias corporativas
                        </TextAreaComponent>
                    </ResultGrid>
                    <ResultGrid>
                    <TextAreaComponent 
                        type="title" 
                        textColor="#707070"
                        width="auto">
                            100 empresas parceiras
                        </TextAreaComponent>
                        <TextAreaComponent
                         type="text"
                         textAlign="center"
                         width="100%"
                         textColor="#01316E">
                           Com times construídos e acelerados com a metodologia da STUDYDEV para empresas
                        </TextAreaComponent>
                    </ResultGrid>
                </div>
            </Content>
        </Container>
    )
}