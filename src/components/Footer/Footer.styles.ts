import styled from '@emotion/styled';
import GitHubLogoImg from '@assets/GitHubLogo.svg';

export const Container = styled.div`
  background-color: #0c0c0c;
  padding: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 10rem;
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

export const GitHubLogo = styled('img')({
  src: GitHubLogoImg,
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  marginRight: '16px',
  transition: 'opacity 0.3s',
});

