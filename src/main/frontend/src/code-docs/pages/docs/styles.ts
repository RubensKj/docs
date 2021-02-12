import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 100%;

  padding: 0 15px;
  padding-top: 32px;

  background: #f9fafb;

  padding-bottom: 68px;

  border-bottom: 1px solid var(--border-header-color);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 18px;

    h1 {
      font-size: 24px;
      font-weight: 800;
    }

    p {
      margin-top: 6px;

      font-size: 16px;
      font-weight: 400;
      color: rgba(22,30,46,var(--text-opacity));
    }
  }
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 28px;
  padding: 0 15px;

  form {
    max-width: 625px !important;
    width: 100%;
  }

  div {
    display: flex !important;
    margin-right: 0;
  }
`;

export const DocsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 56px;

  width: 100%;

  padding: 0 15px;
  max-width: 765px;
  
  a {
    width: 100%;

    margin-bottom: 18px;

    transition: 0.2s transform;

    :hover {
      transform: translateY(-1px);
    }
  }
`;

export const DocCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 1px solid var(--border-header-color);
  border-radius: 5px;

  width: 100%;

  padding: 15px 20px;

  h1 {
    font-size: 22px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(22,30,46,var(--text-opacity));
  }
`;