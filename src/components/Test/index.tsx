import { MainContainer, SecondContainer, LastContainer, Box } from "./styles";
import { useEffect, useRef } from "react";
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ease:'none', duration:2})

export function Test (){
  
const containerRef = useRef()
const containerRef2 = useRef()
const containerRef3 = useRef()

const container = [containerRef, containerRef2, containerRef3]

useEffect(()=>{  
    gsap.utils.toArray(container).forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top top",     
          pin: true, 
          pinSpacing: false 
        });
      });
    }, []);

    return(
    <>
        <MainContainer ref={containerRef}>
            <Box />
        </MainContainer>
        <SecondContainer ref={containerRef2}>
            <Box />
        </SecondContainer>
        <LastContainer ref={containerRef3}>
            <Box />
        </LastContainer>
    </>
       
    )
}