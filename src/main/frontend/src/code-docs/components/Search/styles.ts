import styled from 'styled-components';

interface StyleSearchProps {
  disabled?: boolean;
}

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

export const Form = styled.form<StyleSearchProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 0 12px;

  border: 1px solid var(--border-header-color);
  border-radius: 8px;

  background: #fafafa;

  color: rgba(107,114,128,var(--text-opacity));

  ${props => props.disabled && 'cursor: pointer !important;'}

  input {
    border: 0;
    border-radius: 0;
    background: none;

    ${props => props.disabled && 'cursor: pointer !important;'}

    width: 100%;
    height: 100%;
  }
`;

export const KeybindIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;

  grid-gap: 5px;

  span {
    font-size: 14px;
  }
`;

export const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px;

  border: 1px solid var(--border-header-color);
  border-radius: 4px;

  max-width: 20px;
  max-height: 20px;
  
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  div {
    max-width: none;

    @media only screen and (max-width: 765px) {
      display: flex;
    }
  }
`;