import styled from 'styled-components';
import { Linking } from '../../../core/Styles/utils';

interface TabProps {
  isOpenTab: boolean;
}

export const HeaderResponsive = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: var(--sub-header-height-responsive);

  border-bottom: 1px solid var(--border-header-color);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: var(--max-width);
    width: 100%;
    height: 100%;

    padding: var(--padding-header);
  }

  @media only screen and (max-width: 765px) {
    display: flex;
  }
`;

export const RespLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    padding: 5px;

    border-radius: 50%;

    cursor: pointer;

    transition: 0.2s background;

    :hover {
      background: var(--button-hover);
    }
  }
`;

export const Container = styled.div<TabProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: fixed;
  left: 0;

  max-width: var(--tree-width);
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--border-header-color);

  transition: 0.2s width;

  z-index: 10;
  background: var(--tree-background);
  overflow: hidden;

  @media only screen and (max-width: 765px) {
    width: ${props => props.isOpenTab ? '100%' : '0'};
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const TitleArea = styled.div`
  width: 100%;

  margin-top: 12px;
  padding: 14px 15px 10px;

  h1 {
    font-size: 19px;
    font-weight: 600;
  }
`;

export const TreeTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 22px;

  height: 100%;

  overflow-y: auto;
`;

export const FieldTree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`;

export const LinkingDoc = styled(Linking)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 400;

  h4 {
    font-weight: 600;
  }
`;

export const Childrens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 2px 5px 1.5px;
`;