import React from 'react';

import Logo from '../../../code-docs/assets/logo';
import { Line, Linking, Span } from '../../../core/Styles/utils';

import { Container, TextContent, LogoArea, GetStartedArea, ColumnArea } from './styles';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <TextContent>
          <h1>Documenting all of your projects with Docs..</h1>
          <p>Improve your documentation by bring to Docs! A easier way to create documentation and can be accessed in anywhere.</p>
          <GetStartedArea>
            <Linking href='/get-started' className="button-style">
              <Span>Get Started</Span>
            </Linking>
            <Linking href='https://github.com/RubensKj/docs' target='_blank' className="github-button">
              <Span>GitHub</Span>
            </Linking>
          </GetStartedArea>
        </TextContent>
        <LogoArea>
          <Logo color="#0A72EF" size={565} />
        </LogoArea>
      </Container>
      <Line />
      <ColumnArea>
        <p>Testing</p>
      </ColumnArea>
    </React.Fragment>
  );
}

export default Home;