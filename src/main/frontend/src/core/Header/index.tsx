import React from 'react';

// Icons
import Github from '../Assets/Github';

// Components
import SearchBar from '../SearchBar';

// Styles
import { Linking, Span } from '../Styles/utils';
import { Container, Content, LeftSide, RightSide, LogoArea, Title, Logo, ListLinks } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Linking href='/'>
            <LogoArea>
              <Logo>
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" alt="Logo" />
              </Logo>
              <Title>Docs</Title>
            </LogoArea>
          </Linking>
          <SearchBar />
        </LeftSide>
        <RightSide>
          <ListLinks>
            <Linking>
              <Span>Docs</Span>
            </Linking>
            <Linking>
              <Span>Learn</Span>
            </Linking>
          </ListLinks>
          <Linking href='https://github.com/RubensKj/docs' target='_blank'>
            <Github color="currentColor" size={24} />
          </Linking>
        </RightSide>
      </Content>
    </Container>
  );
}

export default Header;