import React, { useState } from 'react';

import Logo from '../../../code-docs/assets/logo';

import { Line, Linking, Span } from '../../../core/Styles/utils';
import { Container, TextContent, LogoArea, GetStartedArea, ColumnArea, Benefits, BenefitsCard } from './styles';

const Home: React.FC = () => {
  const [getStartedUrl] = useState<string>('602b28a063bdc4ed90b4da9e/602b2951de08466fce3aa453');

  return (
    <React.Fragment>
      <Container>
        <TextContent>
          <h1>Documenting all of your projects with Docs..</h1>
          <p>Improve your documentation by bring to Docs! A easier way to create documentation and can be accessed in anywhere.</p>
          <GetStartedArea>
            <Linking href={`/docs/${getStartedUrl}`} className="button-style">
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
        <Benefits>
          <BenefitsCard>
            <h1>Simple & Intuitive</h1>
            <p>Easy to create a documentation for all of your project. Create each doc to each project that you have!! All linked to your account.</p>
          </BenefitsCard>
          <BenefitsCard>
            <h1>Easy to share</h1>
            <p>You can create all roles to each user that will access your documentation. You can add your coleges to colaborate with you in your docs, every feature they will be able to add a doc page.</p>
          </BenefitsCard>
          <BenefitsCard>
            <h1>Powerful</h1>
            <p>Make your live easier in case you want someone to understand a process from your project.</p>
          </BenefitsCard>
        </Benefits>
      </ColumnArea>
    </React.Fragment>
  );
}

export default Home;
