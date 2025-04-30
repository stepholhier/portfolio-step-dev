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

  import { Link } from 'react-router-dom';
  
  import GitHubLogo from '@assets/GitHubLogo.svg';
  
  export function Header() {
    return (
      <Container>
        
        <LogoWrapper>
        <Link to="/">
          <TextPressure
            text="step.dev"
            minFontSize={24}
            flex={false}
            stroke={false}
            textColor="#fff"
          />
          </Link>
        </LogoWrapper>

        <MenuWrapper>
        <Link to="/sobre">Sobre</Link>
        <a href="#projetos">Projetos</a>
      </MenuWrapper>
  
        <ButtonsWrapper>
          <a href="https://github.com/stepholhier" target='_blank'><StyledGitHubLogo src={GitHubLogo} /></a>
  
          <ShinyWrapper>
            <a href="https://wa.me/5511952401991?text=Ol%C3%A1%2C%20estou%20acessando%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais..">
            <ShinyButton text="Contate-me" />
            </a>
          </ShinyWrapper>
        </ButtonsWrapper>
  
      </Container>
    );
  }
  