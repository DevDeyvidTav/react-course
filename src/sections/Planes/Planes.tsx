import { Container, TextAreaComponent } from "../../components/Typography/styles";
import { Content } from "../about/styles";
import { GridPlane, PlaneButtonRequest, PlanePrice, PlaneText, PlaneTitle } from "./styles";
import { AiOutlineCheck } from "react-icons/ai"

export function Planes() {
    return (
        <Container
            height="100vh"

        >
            <TextAreaComponent
                width="1140px"
                textColor="white"
                type="title"
                margin="80px auto 40px auto ">
                Confira nossos planos
            </TextAreaComponent>
            <Content>
                <GridPlane>
                    <PlaneTitle>
                        Acesso Premium
                    </PlaneTitle>
                    <PlanePrice>
                        R$2000,00
                    </PlanePrice>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Acesso vitalício
                    </PlaneText>
                    <PlaneButtonRequest>
                        Adiquira já!
                    </PlaneButtonRequest>

                </GridPlane>
                <GridPlane>
                    <PlaneTitle>
                        Acesso Platinum
                    </PlaneTitle>
                    <PlanePrice>
                        R$1200,00
                    </PlanePrice>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        12 meses de acesso
                    </PlaneText>
                    <PlaneButtonRequest>
                        Adiquira já!
                    </PlaneButtonRequest>

                </GridPlane>
                <GridPlane>
                    <PlaneTitle>
                        Acesso Gold
                    </PlaneTitle>
                    <PlanePrice>
                        R$800,00
                    </PlanePrice>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        dividimos em até 12x sem juros
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Pagamento à vista via cartão, boleto ou PIX
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Matrícula sem burocracia
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        Contúdos atualizados todo ano
                    </PlaneText>
                    <PlaneText>
                        <AiOutlineCheck style={{ width: 'auto', background: "none", color: "#01316E" }} />
                        6 meses de acesso
                    </PlaneText>
                    <PlaneButtonRequest>
                        Adiquira já!
                    </PlaneButtonRequest>
                </GridPlane>
            </Content>
        </Container>
    )
}