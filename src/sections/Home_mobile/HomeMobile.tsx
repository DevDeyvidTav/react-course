import { Button, Container, TextArea, Title } from "./styles";
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'


export function HomeMobile() {
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
      })
    return (
        <Container>
            <Title data-aos="fade-up">
                Aprenda a programar do zero ao profissional, e
                conquiste sua vaga no mercado de trabalho!
            </Title>
            <TextArea data-aos="fade-up">
                <p
                    style={{ background: 'none', fontSize: '15px', textAlign: 'start' }}
                >
                    Você já pensou em criar seus próprios aplicativos, sites ou softwares, mas não sabe por onde começar?
                    Ou talvez você já tenha alguma experiência em programação, mas gostaria de aprimorar suas habilidades
                    e se tornar um programador profissional? Seja qual for o seu nível de conhecimento, nosso curso de
                    programação foi criado para atender às suas necessidades e ajudá-lo a alcançar seus objetivos.
                </p>
            </TextArea>
            <Button data-aos="fade-up">
                Inscreva-se
            </Button>
        </Container>
    )
}