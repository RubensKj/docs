import React, { useEffect, useRef, useState } from 'react';

import SearchIcon from '../../assets/search';
import CommandIcon from '../../assets/command';

import { SearchProps } from './search';

// Styles
import { Input, Span } from '../../../core/Styles/utils';
import { Container, Form, KeybindIcons, IconArea } from './styles';

const SearchBar: React.FC<SearchProps> = ({ filter, setFilter, isModalOpen, toggleModal, disabled, showKeybind = true }) => {
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

  const onChangeFilter = (f: string) => {
    if (setFilter) {
      setFilter(f);
    }

    setFilterDoc(f);
  }

  return (
    <Container>
      <Form onClick={openSearchBar} disabled={disabled} onSubmit={(e) => e.preventDefault()}>
        <SearchIcon color="rgba(107,114,128,var(--text-opacity))" size={16} />
        <Input ref={inputRef} value={filterDoc} onChange={(e) => onChangeFilter(e.target.value)} placeholder="Search for a doc.." disabled={disabled} />
        {isOpen && showKeybind && (
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