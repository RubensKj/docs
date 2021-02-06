import React, { useEffect, useRef, useState } from 'react';

import SearchIcon from '../../assets/search';
import CommandIcon from '../../assets/command';

import { SearchProps } from './search';

// Styles
import { Input, Span } from '../../../core/Styles/utils';
import { Container, Form, KeybindIcons, IconArea } from './styles';


const SearchBar: React.FC<SearchProps> = ({ isModalOpen, toggleModal, disabled }) => {
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

  return (
    <Container>
      <Form onClick={openSearchBar} disabled={disabled}>
        <SearchIcon color="rgba(107,114,128,var(--text-opacity))" size={16} />
        <Input ref={inputRef} placeholder="Search for a doc.." disabled={disabled} />
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