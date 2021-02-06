import React, { useEffect, useRef, useState } from 'react';

import SearchIcon from '../../assets/search';
import CommandIcon from '../../assets/command';

import { SearchProps } from './search';

// Styles
import { Input, Span } from '../../../core/Styles/utils';
import { Container, Form, KeybindIcons, IconArea } from './styles';


const SearchBar: React.FC<SearchProps> = ({ filter, setFilter, isModalOpen, toggleModal, disabled }) => {
  const [filterDoc, setFilterDoc] = useState<string | undefined>(filter);
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsOpen(!isModalOpen);
    inputRef.current?.focus();
  }, [isModalOpen]);

  const openSearchBar = () => {
    if (toggleModal) {
      toggleModal();
    }
  }

  const onChange = (f: string) => {
    if (setFilter) {
      setFilter(f);
    }

    setFilterDoc(f);
  }

  return (
    <Container>
      <Form onClick={openSearchBar} disabled={disabled}>
        <SearchIcon color="rgba(107,114,128,var(--text-opacity))" size={16} />
        <Input ref={inputRef} value={filterDoc} onChange={(e) => onChange(e.target.value)} placeholder="Search for a doc.." disabled={disabled} />
        {isOpen && (
          <KeybindIcons>
            <IconArea>
              <CommandIcon color="rgba(107,114,128,var(--text-opacity))" size={14} />
            </IconArea>
            <Span>+</Span>
            <IconArea>
              <Span>M</Span>
            </IconArea>
          </KeybindIcons>
        )}
      </Form>
    </Container>
  );
}

export default SearchBar;