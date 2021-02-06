import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  margin-top: 28px;
  
  padding-bottom: 78px;
  border-bottom: 1px solid var(--border-header-color);

  @media only screen and (max-width: 1030px) {
    margin-top: 95px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 465px;
  margin-right: 45px;

  h1 {
    font-size: 48px;
    font-weight: 800;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: rgba(22,30,46,var(--text-opacity));

    margin-top: 18px;
  }

  @media only screen and (max-width: 1030px) {
    text-align: center !important;
    margin-right: 0;
    padding: 0 15px;

    h1 {
      font-size: 52px;
    }
  }

  @media only screen and (max-width: 720px) {
    text-align: center !important;

    h1 {
      font-size: 38px;
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1030px) {
    display: none;
  }
`;