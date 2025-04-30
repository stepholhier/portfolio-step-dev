import { 
    Container,
    Brand, 
    BrandWrapper, 
    StyledVideo,
    BlurTextWrapper, 
    TextTop, 
    TextBottom,
    TextAbout,
    ButtonContact,
    PerfilSection,

} from "./Home.styles";

import { Projects } from "./Projects";

import BlurText from "@/effects/BlurText";

import videoBG from '@assets/videoBGnew.mp4'


import { ArrowUpRight } from "phosphor-react";

import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




export function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


    return(
        <Container>
            
            <BrandWrapper>
            <Brand>
            <StyledVideo
            src={videoBG}
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

            <TextAbout>
                <p>Sou desenvolvedor Front-end com mais de 4 anos de experiência criando interfaces que não só funcionam, mas encantam. Trabalho com React.js, Shopify, WordPress 
                    e um mix de tecnologias que me permite transformar 
                    ideias em projetos reais — com performance, responsividade e foco na experiência do usuário.</p>
                <Link to="/sobre">
                <ButtonContact>
                    Saiba mais <ArrowUpRight size={14} />
                </ButtonContact>
                </Link>
            </TextAbout>

            </BlurTextWrapper>

            </PerfilSection>
            
            <Projects />

            
        </Container>
    );
}