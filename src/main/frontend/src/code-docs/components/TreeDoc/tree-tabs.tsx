import React from 'react';

import { TreeTabsContainer, FieldTree, LinkingDoc, Childrens } from './styles';

// Interfaces
import { DocPage } from '../../model/model';
interface TreeTabsProps {
  pageId?: string;
  fields?: DocPage[];
}

const TreeTabs: React.FC<TreeTabsProps> = ({ pageId, fields }) => {
  return (
    <TreeTabsContainer>
      {fields && fields.length > 0 ? (
        <React.Fragment>
          {fields.map(field => (
            <FieldTree key={field.id}>
              <LinkingDoc href={field.id}>
                {pageId && pageId === field.id ? (
                  <h4>{field.title}</h4>
                ) : (
                  <p>{field.title}</p>
                )}
              </LinkingDoc>
            </FieldTree>
          ))}
        </React.Fragment>
      ) : (
          <p>Any fields found for this documentation</p>
        )}
    </TreeTabsContainer>
  );
}

export default TreeTabs;