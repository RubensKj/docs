import React from 'react';

import { Container } from './styles';

// Interface
import { DocPage } from '../../model/model';

interface DocumentationTab {
  currentPage?: DocPage;
}

const DocumentationTab: React.FC<DocumentationTab> = (props) => {
  return (
    <Container>
      <h4>{props.currentPage?.title}</h4>
      {props.currentPage?.content}
    </Container>
  );
}

export default DocumentationTab;