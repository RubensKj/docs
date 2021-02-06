import React from 'react';

// Styles
import { Input } from '../../../core/Styles/utils';
import { Container, Form } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="Search for a doc.." />
      </Form>
    </Container>
  );
}

export default SearchBar;