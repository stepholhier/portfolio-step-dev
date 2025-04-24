import { 
    Container, 
    Brand, 
    BrandWrapper, 
    StyledVideo,
    BlurTextWrapper, 
    TextTop, 
    TextBottom,
    TextAbout,
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

            <TextAbout>
                <p>
                Oi, eu sou o Stephano 👋
                </p>

                <p>
                Sou desenvolvedor Front-end com mais de 4 anos de experiência criando interfaces que não só funcionam, mas encantam. Trabalho com React.js, Shopify, WordPress e um mix de tecnologias que me permite transformar ideias em projetos reais — com performance, responsividade e foco na experiência do usuário.
                </p>

                <p>
                Se quiser bater um papo sobre dev ou aquele projeto que está saindo do papel, só chamar!
                </p>
            </TextAbout>

            
            </BlurTextWrapper>

            <FotoPerfil src={MinhaFoto} /> 

            </PerfilSection>

            <Projects />
            
        </Container>
    );
}