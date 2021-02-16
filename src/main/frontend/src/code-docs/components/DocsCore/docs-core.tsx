import React, { useState } from 'react';
import { useParams } from 'react-router';

// Components
import TreeDoc from '../TreeDoc/tree';
import DocumentationTab from '../DocumentationTab/documentation-tab';

// Api
import { resolveInitialDocumentation } from '../../api/documentation-api';

// Interfaces
import { ParamsType } from '../../../core/Utils/core-utils';
import { DocPage, Documentation } from '../../model/model';
import { resolveCurrentPageByDocumentation } from '../../api/docs-utils';

const DocsCore: React.FC = () => {
  const { documentationId, pageId } = useParams<ParamsType>();

  const [documentation, setDocumentation] = useState<Documentation>(resolveInitialDocumentation(documentationId));
  const [currentPage, setCurrentPage] = useState<DocPage | undefined>(resolveCurrentPageByDocumentation(documentationId, pageId));

  return (
    <React.Fragment>
      <TreeDoc pageId={currentPage?.id} documentation={documentation} />
      <DocumentationTab currentPage={currentPage} />
    </React.Fragment>
  );
}

export default DocsCore;