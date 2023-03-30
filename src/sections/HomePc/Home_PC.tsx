
import { useState } from "react";
import ImageWithBlurhash from "../../components/image/image"
import { RegistrationModal } from "../../components/modal";

import { Button, Container, Content, TextArea, Title } from "./styles"

export function Home_PC() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
    return (
        <Container>
            < Content>
                <TextArea>
                    <Title>
                        Aprenda a programar do zero ao profissional, e
                        conquiste sua vaga no mercado de trabalho!
                    </Title>
                        <p>
                        Você já pensou em criar seus próprios aplicativos, sites ou softwares, mas não sabe por onde começar?
                        Ou talvez você já tenha alguma experiência em programação, mas gostaria de aprimorar suas habilidades
                        e se tornar um programador profissional? Seja qual for o seu nível de conhecimento, nosso curso de
                        programação foi criado para atender às suas necessidades e ajudá-lo a alcançar seus objetivos.
                        </p>
                    <Button
                    onClick={handleModalOpen}>
                        Inscreva-se!
                    </Button>
                </TextArea>
                <TextArea>
                <ImageWithBlurhash src="/home-img.png"
                 blurhash="L74Va|L}xap1I~k=RiW9O1xZj^oK"/>
                </TextArea>
                
            </Content>
            <RegistrationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}/>
            
        </Container>
    )
}