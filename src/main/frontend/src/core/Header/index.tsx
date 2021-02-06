import React from 'react';

// Icons
import Github from '../Assets/Github';
import LogoImage from '../../code-docs/assets/logo';

// Components
import SearchBar from '../../code-docs/components/SearchBar';

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
                <LogoImage color="#0A72EF" size={24} />
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