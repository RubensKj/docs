import React, { useCallback, useEffect, useState } from 'react';

// Utils
import { Linking } from '../../../core/Styles/utils';

// Components
import Logo from '../../assets/logo';
import SearchBar from '../../components/Search/search-bar';

// Api
import { resolveInitial } from '../../api/documentation-api';
import { Documentation } from '../../model/model';
import { FilterDocumentations } from '../../service/filterer';
import { resolveDocsMainPageUrl } from '../../api/docs-utils';

// Styles
import { Container, Header, SearchArea, DocsList, DocCard } from './styles';

const Docs: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [docs] = useState<Documentation[]>(resolveInitial());
  const [filteredList, setFilteredList] = useState<Documentation[]>(docs);

  const filterListByFilter = useCallback((filter: string) => {
    if (!filter) {
      setFilteredList(docs);
      return;
    }

    setFilteredList(docs.filter(doc => FilterDocumentations(doc, filter)));
  }, [docs, setFilteredList]);

  useEffect(() => {
    filterListByFilter(filter);
  }, [filter, filterListByFilter]);

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
      {filteredList && filteredList.length > 0 ? (
        <DocsList>
          {filteredList.map(documentation => (
            <Linking key={documentation.id} href={resolveDocsMainPageUrl(documentation.id, documentation.mainPageId)}>
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