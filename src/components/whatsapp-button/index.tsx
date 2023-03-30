import { MdWhatsapp } from "react-icons/md";
import { AnimatedButton } from "./style";


export function WhatssAppButton(){
    return(
        <AnimatedButton>
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