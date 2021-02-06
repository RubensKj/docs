import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-top: 28px;

  max-width: 1328px;
  width: 100%;
  
  padding-bottom: 78px;

  @media only screen and (max-width: 1030px) {
    margin-top: 95px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 575px;
  margin-left: 65px;

  h1 {
    font-size: 62px;
    font-weight: 800;
  }

  p {
    font-size: 21px;
    font-weight: 400;
    color: rgba(22,30,46,var(--text-opacity));

    margin-top: 18px;
    width: 100%;
  }

  @media only screen and (max-width: 1030px) {
    text-align: center !important;
    margin-right: 0;
    margin-left: 0;
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

export const GetStartedArea = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;

  grid-gap: 12px;

  margin-top: 22px;
  width: 100%;

  a {
    border-radius: 4px;
    border: 0 solid #d2d6dc;
    padding: 15px 20px;

    span {
      font-size: 18px;
      font-weight: 500;
    }

    transition: 0.2s opacity;

    :hover {
      opacity: 0.9;
    }
  }

  .button-style {
    color: #FFF;
    background: #0A72EF;
    box-shadow: 0 0 2px 3px rgba(66,153,225,0.09);
  }

  .github-button {
    color: #0A72EF;
    background: #FFF;
    box-shadow: 0px 1px 2px 1px rgba(30,35,90,0.1);
  }

  @media only screen and (max-width: 1030px) {
    justify-content: center;
  }
`;

export const ColumnArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f9fafb;

  width: 100%;
  min-height: 400px;
`;