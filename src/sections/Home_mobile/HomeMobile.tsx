import { Button, Container, TextArea, Title } from "./styles";
import { useEffect, useState } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { RegistrationModal } from "../../components/modal";


export function HomeMobile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
      })
      
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
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
            <Button 
             onClick={handleModalOpen}
            data-aos="fade-up">
                Inscreva-se
            </Button>
            <RegistrationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}/>
            
        </Container>
    )
}