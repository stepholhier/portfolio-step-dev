import { Container, Brand, BrandWrapper, BlurTextWrapper, TextTop, TextBottom, StyledVideo } from "./Home.styles";
import BlurText from "@/effects/BlurText";

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
            text="Front-End"
            delay={0.1}
            animateBy="letters"
            direction="bottom"
            />
            </TextBottom>
            
            </BlurTextWrapper>
        </Container>
    );
}