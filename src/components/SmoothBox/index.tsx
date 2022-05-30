import { Boxes, SmoothContent, SmoothWrapper, Box } from "./styles";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap"



gsap.registerPlugin(ScrollTrigger)



export function SmoothBox (){
const boxRef = useRef()

useEffect(()=>{
    
    gsap.fromTo(boxRef.current, {rotation: 0}, {rotation:180, duration:3, scrollTrigger:{
        trigger:boxRef.current
    }})
},[])
    return(
        <>
        <div style={{height:"100vh", width:'100vw', backgroundColor:"green"}} />
        <Boxes>
            <Box ref={boxRef} color='blue' />
        </Boxes>
        </>
    )
}