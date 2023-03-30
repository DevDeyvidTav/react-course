import { TextAreaComponent } from "../../components/Typography/styles";
import { Mob_Container, ResultGrid } from "./styles";
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function About_Mob(){
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
      })
    return(
        <Mob_Container id="aboutmob">
            <TextAreaComponent
            data-aos="fade-up"
                textColor="#01316E"
                width="auto"
                type="title"
                margin="30px 20px ">
                Como surgimos?
            </TextAreaComponent>
            
                <TextAreaComponent
                data-aos="fade-up"
                    width="90%"
                    margin="20px auto"
                    type="text"
                    textColor="#707070">
                    Este curso de programação foi desenvolvido com base na experiência e conhecimento adquiridos ao longo de anos de estudo e prática na área de tecnologia da informação.
                    A ideia de criar esse curso surgiu da necessidade de oferecer um conteúdo completo e atualizado para quem deseja aprender programação de forma prática e eficiente. Para isso, foram realizadas diversas pesquisas de mercado e análises de tendências na área de TI, visando identificar as habilidades e competências mais demandadas pelo mercado de trabalho.
                    O resultado desse trabalho foi um curso completo e abrangente, que oferece aos alunos conhecimentos teóricos e práticos sobre programação, desde os conceitos básicos até as tecnologias mais avançadas. Além disso, o curso conta com atividades práticas e projetos reais para que os alunos possam aplicar os conhecimentos adquiridos e desenvolver suas habilidades.
                    A equipe responsável pelo desenvolvimento do curso é composta por profissionais altamente capacitados e experientes na área de programação e tecnologia da informação. Todo o conteúdo foi cuidadosamente elaborado para garantir a qualidade e eficácia do ensino, e está sujeito a direitos autorais.
                </TextAreaComponent>
                <ResultGrid
                data-aos="fade-up">
                    <TextAreaComponent 
                    data-aos="fade-up"
                        textAlign="center"
                        type="title" 
                        textColor="#707070"
                        width="auto">
                            100 empresas parceiras
                        </TextAreaComponent>
                        <TextAreaComponent
                        data-aos="fade-up"
                         type="text"
                         textAlign="center"
                         width="100%"
                         textColor="#01316E">
                           Com times construídos e acelerados com a metodologia da STUDYDEV para empresas
                        </TextAreaComponent>
                    </ResultGrid>
        </Mob_Container>
    )
}