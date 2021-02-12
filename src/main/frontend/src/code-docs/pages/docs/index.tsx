import React, { useState } from 'react';
import { Linking } from '../../../core/Styles/utils';
import Logo from '../../assets/logo';
import SearchBar from '../../components/Search/search-bar';

// Api
import { resolveInitial } from '../../api/documentation-api';
import { Documentation } from '../../model/model';

import { Container, Header, SearchArea, DocsList, DocCard } from './styles';

const Docs: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [docs, setDocs] = useState<Documentation[]>(resolveInitial());

  return (
    <Container>
      <Header>
        <Logo size={70} color="#0A72EF" />
        <div>
          <h1>Find a documentation</h1>
          <p>Search the documentation that you are looking for</p>
        </div>
      </Header>
      <SearchArea>
        <SearchBar filter={filter} setFilter={setFilter} showKeybind={false} />
      </SearchArea>
      {docs && docs.length > 0 ? (
        <DocsList>
          {docs.map(documentation => (
            <Linking key={documentation.id} href={`/docs/${documentation.id}`}>
              <DocCard>
                <h1>{documentation.name}</h1>
                <p>{documentation.description}</p>
              </DocCard>
            </Linking>
          ))}
        </DocsList>
      ) : (
          <p>Any docs were found.</p>
        )}
    </Container>
  );
}

export default Docs;