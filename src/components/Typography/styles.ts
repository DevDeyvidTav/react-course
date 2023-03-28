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
    gap: string
}

export const Content = styled.div <ContentProps>`
    width: 100vw;
    height: ${ContentProps => ContentProps.height};
    max-height: 800px;
    display: ${ContentProps => ContentProps.display};
    justify-content: ${ContentProps => ContentProps.justifyContent};
    align-items: ${ContentProps => ContentProps.alignItems};
    gap: ${ContentProps => ContentProps.gap};
    background-color: white;
`
