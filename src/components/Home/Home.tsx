import { 
    Container, 
    Brand, 
    BrandWrapper, 
    StyledVideo,
    BlurTextWrapper, 
    TextTop, 
    TextBottom,
    PerfilSection,
    FotoPerfil,

} from "./Home.styles";

import { Projects } from "./Projects";

import BlurText from "@/effects/BlurText";

import MinhaFoto from '@assets/FotoPort.png';


export function Home() {



    return(
        <Container>

            <BrandWrapper>
            <Brand>
            <StyledVideo
            src="#"
            autoPlay
            loop
            muted
            playsInline
            />
            </Brand>
            </BrandWrapper>

            <PerfilSection>
            <BlurTextWrapper>

            <TextTop>
            <BlurText
            text="Desenvolvedor"
            delay={0.1}
            animateBy="words"
            direction="top"
            />
            </TextTop>


            <TextBottom>
            <BlurText
            text="Front-End & Mobile"
            delay={0.1}
            animateBy="letters"
            direction="bottom"
            />
            </TextBottom>

            


            </BlurTextWrapper>


            <FotoPerfil src={MinhaFoto} /> 

            </PerfilSection>


            <Projects />
            
        </Container>
    );
}