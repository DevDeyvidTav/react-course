import { ModalContent, ModalWrapper, StyledButton, StyledCancelButton, StyledInput, StyledPhoneInput } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: any
}

export const RegistrationModal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent
            >
                <h2>Inscreva-se</h2>
                <form>
                    <StyledInput type="text" placeholder="Seu nome" />
                    <StyledInput type="email" placeholder="Seu email" />
                    <StyledPhoneInput mask="(99) 99999-9999" maskChar="_" type="tel" placeholder="Seu número de celular" />
                    <StyledButton>Enviar</StyledButton>
                </form>
                <StyledCancelButton onClick={onClose}>voltar</StyledCancelButton>
            </ModalContent>
        </ModalWrapper>
    );
};

  