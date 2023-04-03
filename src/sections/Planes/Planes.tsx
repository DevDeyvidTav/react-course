import { Container, TextAreaComponent } from "../../components/Typography/styles";
import { Content } from "../../components/Typography/styles";
import { GridPlane, PlaneButtonRequest, PlanePrice, PlaneText, PlaneTitle } from "./styles";
import { AiOutlineCheck } from "react-icons/ai"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function Planes() {
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
      })
    return (
        <Container
            id="planes"
            backgroundColor="#efeded"
            height="100vh"
            maxHeight="800px"

        >
            <TextAreaComponent
                data-aos="fade-up"
                width="1140px"
                textColor="#01316E"
                type="title"
                padding="20px 0 0 0"
                margin="0 auto 40px auto ">
                Confira nossos planos
            </TextAreaComponent>
            <Content 
            
            height="auto">
                <GridPlane 
                data-aos="fade-up">
                    <PlaneTitle
                    data-aos="fade-up">
                        Acesso Premium
                    </PlaneTitle>
                    <PlanePrice
                    data-aos="fade-up">
                        R$2000,00
                    </PlanePrice >
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Acesso vitalício
                    </PlaneText>
                    <PlaneButtonRequest data-aos="fade-up">
                        Adiquira já!
                    </PlaneButtonRequest>

                </GridPlane>
                <GridPlane data-aos="fade-up">
                    <PlaneTitle>
                        Acesso Platinum
                    </PlaneTitle >
                    <PlanePrice data-aos="fade-up">
                        R$1200,00
                    </PlanePrice>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{ width: '20px', background: "none", color: "#01316E" }} />
                        12 meses de acesso
                    </PlaneText>
                    <PlaneButtonRequest data-aos="fade-up">
                        Adiquira já!
                    </PlaneButtonRequest>

                </GridPlane>
                <GridPlane data-aos="fade-up">
                    <PlaneTitle data-aos="fade-up">
                        Acesso Gold
                    </PlaneTitle>
                    <PlanePrice data-aos="fade-up">
                        R$800,00
                    </PlanePrice>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText data-aos="fade-up">
                        <AiOutlineCheck style={{  width: '20px', background: "none", color: "#01316E" }} />
                        6 meses de acesso
                    </PlaneText>
                    <PlaneButtonRequest data-aos="fade-up">
                        Adiquira já!
                    </PlaneButtonRequest>
                </GridPlane>
            </Content>
        </Container>
    )
}