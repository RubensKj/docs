import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: var(--header-height);

  border-bottom: 1px solid var(--border-header-color);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  max-width: 1378px;
  width: 100%;

  @media only screen and (max-width: 585px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: 585px) {
    margin-top: 12px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  transition: 0.2s font-size, margin;

  a {
    margin-left: calc(2rem * (1 - var(--space-x-reverse)));
  }

  @media only screen and (max-width: 585px) {
    width: 100%;

    margin: 12px 0;
    justify-content: flex-start;

    a {
      margin-left: 0;
      margin-right: calc(2rem * (1 - var(--space-x-reverse)));

      span {
        font-size: 14px;
      }
    }
  }
`;

export const ListLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;

  margin-right: 16px;

  @media only screen and (max-width: 765px) {
    justify-content: flex-start;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  
  max-width: 48px;
  max-height: 48px;

  min-width: 48px;
  min-height: 48px;

  img {
    width: 100%;
    height: 100%;
  }
`;