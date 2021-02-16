import React from 'react';

import { Documentation } from '../../model/model';

import { Linking } from '../../../core/Styles/utils';
import { Card } from './styles';

import { resolveDocsMainPageUrl } from '../../api/docs-utils';

interface CardProps {
  doc: Documentation;
}

const SearchCard: React.FC<CardProps> = ({ doc }) => {
  return (
    <Linking href={resolveDocsMainPageUrl(doc.id, doc.mainPageId)}>
      <Card>
        <h3>{doc.name}</h3>
        <p>{doc.description}</p>
      </Card>
    </Linking>
  );
}

export default SearchCard;