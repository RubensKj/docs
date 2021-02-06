import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 445px;

  margin-right: 24px;

  transition: 0.2s display;

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;