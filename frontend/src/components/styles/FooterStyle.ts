import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 60px 80px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterColumn = styled.div`
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FooterTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 18px;
  color: #03dac6;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;

  &:hover {
    color: #03dac6;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    color: #fff;
    font-size: 24px;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #03dac6;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #ccc;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;