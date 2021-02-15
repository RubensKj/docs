import React from 'react';

// Components
import TreeDoc from '../../components/TreeDoc/tree';
import DocumentationTab from '../../components/DocumentationTab/documentation-tab';

import { Container } from './styles';

const Starting: React.FC = () => {
  return (
    <React.Fragment>
      <TreeDoc />
      <DocumentationTab />
    </React.Fragment>
  );
}

export default Starting;