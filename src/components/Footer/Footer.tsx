import { LogoWrapper } from "../Header/Header.styles";
import TextPressure from "../Header/TextPressure";

import { Container, MenuFooter, ButtonsWrapperFooter, GitHubLogo } from "./Footer.styles";

import { Link } from 'react-router-dom';

import GitHubLogoImg from '@assets/GitHubLogo.svg';

export function Footer() {
    
    const menu = ['Projetos', 'Sobre']

    return (
        <Container>
            {/* Logo centralizado */}
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
            
            {/* Menu à esquerda, em coluna */}
            <MenuFooter>
                {menu.map((item, index) => (
                    <li key={index}>
                        {item === 'Sobre' ? (
                            <Link to="/sobre">{item}</Link>
                        ) : item === 'Projetos' ? (
                            <a href="#projetos">{item}</a>
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
        </Container>
    );
}
