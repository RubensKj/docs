import React from 'react';
import { Linking } from '../../../core/Styles/utils';

import { Documentation } from '../../model/model';

import { Card } from './styles';

interface CardProps {
  doc: Documentation;
}

const SearchCard: React.FC<CardProps> = ({ doc }) => {
  return (
    <Linking href={`/docs/${doc.id}`}>
      <Card>
        <h3>{doc.name}</h3>
        <p>{doc.description}</p>
      </Card>
    </Linking>
  );
}

export default SearchCard;