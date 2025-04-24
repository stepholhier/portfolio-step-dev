import { 
    Container, 
    LogoWrapper, 
    ShinyWrapper,
    StyledGitHubLogo,
    ButtonsWrapper,
    MenuWrapper
  } from '@components/Header/Header.styles';
  
  import TextPressure from './TextPressure';
  import ShinyButton from './ShinyButton';
  
  import GitHubLogo from '@assets/GitHubLogo.svg';
  
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

        <MenuWrapper>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
      </MenuWrapper>
  
        <ButtonsWrapper>
          <a href="https://github.com/stepholhier"><StyledGitHubLogo src={GitHubLogo} /></a>
  
          <ShinyWrapper>
            <a href="https://wa.me/5511952401991?text=Ol%C3%A1%2C%20estou%20acessando%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais..">
            <ShinyButton text="Contate-me" />
            </a>
          </ShinyWrapper>
        </ButtonsWrapper>
  
      </Container>
    );
  }
  