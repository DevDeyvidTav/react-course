import styled from "styled-components";


interface TextAreaProps{
    type: 'title' | 'text',
    textColor: string,
    width?: string,
    height?: string,
    margin?: string
    padding?: string
    textAlign?: string
}

export const TextAreaComponent  = styled.div <TextAreaProps> `
    width: ${TextAreaProps => TextAreaProps.width};
    height: ${TextAreaProps => TextAreaProps.height};;
    color: ${TextAreaProps => TextAreaProps.textColor};;
    background: none;
    font-size: ${TextAreaProps => TextAreaProps.type === 'title' ? "40px" : "19px"};;
    font-weight: ${TextAreaProps => TextAreaProps.type === 'title' ? "900" : "500"};;
    margin: ${TextAreaProps => TextAreaProps.margin};
    padding: ${TextAreaProps => TextAreaProps.padding};
    text-align: ${TextAreaProps => TextAreaProps.textAlign};
`
interface ContainerProps {
    height: string
    backgroundUrl?: string
    backgroundColor?: string
}

export const Container = styled.div <ContainerProps>`
    width: 100vw;
    height: ${ContainerProps => ContainerProps.height};
    max-height: 800px;
    background-color: ${ContainerProps => ContainerProps.backgroundColor};
    
`
interface ContentProps {
    height: string
    display?: string 
    justifyContent?: string
    alignItems?: string
    gap?: string
}

export const Content = styled.div <ContentProps>`
    max-width: 1140px;
    margin: 40px auto;
    height: ${ContentProps => ContentProps.height};
    max-height: 800px;
    display: flex;
    justify-content: space-between;
    align-items: ${ContentProps => ContentProps.alignItems};
    gap: ${ContentProps => ContentProps.gap};
    background: none;
    @media (max-width: 758px) {
        flex-direction: column;
        height: 1180px;
        align-items: center;
        gap: 20px;
        
    }
`
