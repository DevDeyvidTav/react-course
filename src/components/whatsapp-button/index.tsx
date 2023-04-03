import { MdWhatsapp } from "react-icons/md";
import { AnimatedButton } from "./style";


export function WhatssAppButton(){
    return(
        <AnimatedButton target="_blank" href="https://wa.me/5581997210434">
            <MdWhatsapp 
            style={{
                background: "none",
                color: "white",
                width: "40px",
                height: "40px"
            }}/>
        </AnimatedButton>
    )
}