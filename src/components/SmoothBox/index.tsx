import { MainContainer, SecondContainer, LastContainer, Box } from "./styles";
import { useEffect, useRef, useState } from "react";
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export function SmoothBox (){
const boxRef = useRef()
const boxRef2 = useRef()
const boxRef3 = useRef()

useEffect(()=>{
  
    gsap.to(boxRef2.current, {
        scrollTrigger:{
            trigger:boxRef2.current,
            toggleActions: 'restart pause reverse none'
        },
        x: 400,
        rotation:360,
        duration:2
      });
      
      
    }, []);
    

    return(
        <>
        <MainContainer>
            <Box ref={boxRef}/>
        </MainContainer>
        <SecondContainer>
            <Box ref={boxRef2}/>
        </SecondContainer>
        <LastContainer>
            <Box ref={boxRef3}/>
        </LastContainer>
     </>  
    )
}