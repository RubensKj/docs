import styled from 'styled-components';

export const Container = styled.div`
  margin-left: var(--tree-width);

  transition: 0.22s margin;

  @media only screen and (max-width: 765px) {
    margin-left: 0 !important;
  }
`;
