import styled, { keyframes, css } from "styled-components";
import GitHubLogo from '@assets/GitHubLogo.svg';

export const Container = styled.header`
    display: flex;
    background-color: transparent;
    color: white;
    width: 100%;
    padding: 0px;
    align-items: center;
    margin: 0px;

    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 16px 8px;
  }
`;

export const LogoWrapper = styled.div`
    width: 100%;
    max-width: 400px;   // ajusta conforme preferir
    height: 100px;
    margin: 0 auto;
    position: relative;
    margin-left: 43rem;

    @media (max-width: 1024px) {
    margin-left: 0; /* remove no tablet */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const shine = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

export const StyledShinyText = styled.div<{ disabled?: boolean; speed?: number }>`
    color: #b5b5b5a4;
    background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;

    /* Novo fundo e padding */
    padding: 8px 16px;
    background-color: #666;
    border-radius: 4px;

    ${({ disabled, speed = 5 }) =>
    !disabled &&
    css`
        animation: ${shine} ${speed}s linear infinite;
    `}
    `;

export const ShinyWrapper = styled.div`
  background-color: #212121;
  padding: 3px;
  border-radius: 8px;
  display: flex;
  border: 1px solid #434343;
  align-items: center;
  cursor: pointer;
  transition: .3s all;

  margin-right: 5rem;

  height: 40px;

  &:hover {
    background-color: #2a2a2a;
    transform: scale(1.1);
    transition: .3s all;
  }

  @media (max-width: 1024px) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    height: 36px;
    padding: 6px;
  }
`;

export const StyledGitHubLogo = styled.img.attrs({
    src: GitHubLogo,
  })`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 16px;
    transition: opacity 0.3s;
  
    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  `;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-right: 5rem;

  @media (max-width: 1024px) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 12px;
    justify-content: center;
  }
`;