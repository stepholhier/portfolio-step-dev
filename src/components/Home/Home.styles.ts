/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 16px;
  text-align: left;
`;

export const BrandWrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

export const Brand = styled.div`
  font-size: 11px;
  width: 93%;
  text-align: center;
  padding: 12px;
  background-color: #060606;
  border: 1px solid #ffffff0d;
  color: #8a8a8a;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 70px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const BlurTextWrapper = styled.div`
  width: 100%;
  color: white;
  justify-content: flex-start;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding-left: 10px;
  }
`;

export const PerfilSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 3rem;
  background-color: transparent;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FotoPerfil = styled.img`
  width: 600px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TextTop = styled.div`
  font-size: 50px;
  color: #d5d5d5;
  margin-top: 50px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const TextBottom = styled.div`
  font-size: 75px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 70px;
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 680px;

  @media (max-width: 767px) {
    height: 380px;
  }
`;

export const TextAbout = styled.div`
    font-size: 1rem;
    width: 90%;
    line-height: 2;
    margin-top: 40px;
    white-space: normal;
  word-break: break-word;

  p + p {
    margin-top: 1.2rem;
  }
`; 


export const ProjectsSection = styled.div`
  
`;


export const TitleRow = styled.div`

`;