/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 16px;
  text-align: left;
  background-color: transparent;
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
  align-items: center;

  @media (max-width: 767px) {
    padding-left: 10px;
  }
`;

export const PerfilSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4rem 3rem;
  background-color: transparent;
  flex-wrap: wrap;
  margin-top: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    padding: 2rem;
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
  margin-bottom: 50px;

  @media (max-width: 767px) {
    font-size: 60px;
  }
`;

export const TextAbout = styled.div`
  color: white;
  word-break: break-all;
  line-height: 1.4;
  width: 77%;
  font-size: 1.2rem;
  text-align: center;
  `;

export const ButtonContact = styled.div`
    color: #666;
    margin-top: 60px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
  
    :hover {
      color: #939292;
      transition: 0.3s;
    }
  `;

export const StyledVideo = styled.video`
  width: 100%;
  height: 680px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 767px) {
    height: 380px;
  }
`;

export const ProjectsSection = styled.div`
  background: transparent;
`;


