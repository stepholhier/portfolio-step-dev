import { LogoWrapper } from "../Header/Header.styles";
import TextPressure from "../Header/TextPressure";

import { Container, 
         ContentFooter,
         MenuFooter, 
         ButtonsWrapperFooter, 
         GitHubLogo,
         BgFooterContainer,
         BgFooterImg,
         BgFooterText,
         BgFooterButton, } from "./Footer.styles";

import { Link } from 'react-router-dom';

import GitHubLogoImg from '@assets/GitHubLogo.svg';
import BgFooter from '@assets/imgFooternew.png';
import ShinyButton from "../Header/ShinyButton";

export function Footer() {
    
    const menu = ['Projetos', 'Sobre']

    return (
        <Container>
            <BgFooterContainer>
            
            <BgFooterImg src={BgFooter} />
                
                <BgFooterText>
                Mantenha contato
                <p>Entre em contato e vamos dar vida às suas ideias! Estou aqui para colaborar e criar mágica digital.</p>
                </BgFooterText>
                
                <BgFooterButton>
                <a href="https://wa.me/5511952401991?text=Ol%C3%A1%2C%20estou%20acessando%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais..">
                    <ShinyButton text="Contate-me"/>
                </a>
                </BgFooterButton>
            
            </BgFooterContainer>

            <ContentFooter>
            {/* Logo centralizado */}
            <LogoWrapper>
                <Link to="/">
                    <TextPressure
                        text="<stephanolhier/>"
                        minFontSize={24}
                        flex={false}
                        stroke={false}
                        textColor="#fff"
                    />
                </Link>
            </LogoWrapper>
            
            {/* Menu à esquerda, em coluna */}
            <MenuFooter>
                {menu.map((item, index) => (
                    <li key={index}>
                        {item === 'Sobre' ? (
                            <Link to="/sobre">{item}</Link>
                        ) : item === 'Projetos' ? (
                            <Link to="/#projetos">{item}</Link>
                        ) : (
                            item
                        )}
                    </li>
                ))}

                {/* Ícone GitHub e Botão "Contate-me" à direita, em coluna */}
            <ButtonsWrapperFooter>
                <a href="https://github.com/stepholhier" target='_blank' rel="noopener noreferrer">
                    <GitHubLogo src={GitHubLogoImg} />
                </a>
            </ButtonsWrapperFooter>
            </MenuFooter>
            </ContentFooter>

        </Container>
    );
}
