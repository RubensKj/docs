import React from 'react';

import Logo from '../../../code-docs/assets/logo';

import { Container, TextContent, LogoArea } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TextContent>
        <h1>Documenting all of your projects with Docs..</h1>
        <p>A better way to creating documentation for your projects</p>
      </TextContent>
      <LogoArea>
        <Logo color="#0A72EF" size={465} />
      </LogoArea>
    </Container>
  );
}

export default Home;