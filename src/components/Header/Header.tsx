import { Container, 
         LogoWrapper, 
         ShinyWrapper,
         StyledGitHubLogo,
         ButtonsWrapper } from '@components/Header/Header.styles';
import TextPressure from './TextPressure';
import ShinyButton from './ShinyButton'


export function Header() {
    return (
        <Container>

        <LogoWrapper>
            <TextPressure
            text="step.dev"
            minFontSize={24}
            flex={false}
            stroke={false}
            textColor="#fff"
            />
        </LogoWrapper>
        
        <ButtonsWrapper>

        <StyledGitHubLogo />

        <ShinyWrapper>
            <ShinyButton text="Contate-me" />
        </ShinyWrapper>

        </ButtonsWrapper>


        </Container>
    );
}