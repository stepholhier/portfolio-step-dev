import styled from '@emotion/styled';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
`;

export const ContentFooter = styled.div`
  background-color: #0c0c0c;
  padding: 40px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const MenuFooter = styled.ul`
  font-size: 1.2rem;
  color: #d6d6d6;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex: 2;
  margin-top: 40px;
`;

export const ButtonsWrapperFooter = styled.div`
    
`;

export const GitHubLogo = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 16px;
  transition: opacity 0.3s;
`;


export const BgFooterContainer = styled.div`
  position: relative;
`;

export const BgFooterImg = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-bottom: -5px;
  pointer-events: none;
`;

export const BgFooterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f2f2f2;
  font-size: 3rem;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Inter';

  p {
    font-size: 0.85rem;
    width: 55%;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 1.7;
    font-weight: 100;
    color: #fff;
    font-family: 'Arial';
  }
`;

export const BgFooterButton = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2A2A2A;
  border: 1px solid #434343;
  border-radius: 8px;
  cursor: pointer;
`;
