import { 
    Container,
    NameBrand,
    StyledGitHubLogo,
    ButtonsWrapper,
    MenuWrapper
  } from '@components/Header/Header.styles';
  
  import { Link } from 'react-router-dom';
  
  import GitHubLogo from '@assets/GitHubLogo.svg';
  
  export function Header() {
    return (
      <Container>

      <NameBrand>
      <Link to="/">
          <h1>STEPHANOLHIER</h1>
      </Link>
      </NameBrand>
        
        <MenuWrapper>
        <Link to="/sobre">Sobre</Link>
        <Link to="/#projetos">Projetos</Link>
        
        <ButtonsWrapper>
          <a href="https://github.com/stepholhier" target='_blank'><StyledGitHubLogo src={GitHubLogo} /></a>
  
        </ButtonsWrapper>
  
      </MenuWrapper>

      </Container>
    );
  }
  