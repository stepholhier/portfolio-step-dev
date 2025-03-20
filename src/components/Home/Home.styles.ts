import styled from "styled-components";


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
    padding-left: 70px;
    color: white;

    @media (max-width: 767px) {
        padding-left: 10px;
    }
`;

export const TextTop = styled.div`
    font-size: 50px;
    color: #d5d5d5;

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const TextBottom = styled.div`
    font-size: 120px;
    color: #fff;
    font-weight: bold;

    @media (max-width: 767px) {
        font-size: 70px;
    }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 680px;
  object-fit: cover;
  display: block;

  @media (max-width: 767px) {
    height: 380px;
  }
`;