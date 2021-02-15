import React, { SetStateAction, useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Styles } from 'react-modal';

// Interfaces
import { Documentation } from '../../model/model';

// Api
import { resolveInitial } from '../../api/documentation-api';
import { FilterDocumentations } from '../../service/filterer';

// Components
import SearchBar from './search-bar';
import Modal from '../../../core/Modal';

import { ModalContent, SearchContent, FooterModal, IconArea, DocsCards } from './styles';
import { Line, Span } from '../../../core/Styles/utils';
import SearchCard from './search-card';

export interface SearchProps {
  filter?: string;
  setFilter?: React.Dispatch<SetStateAction<string>>;

  isModalOpen?: boolean;
  toggleModal?: () => void;

  disabled?: boolean;
  showKeybind?: boolean;
}

const Search: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [docs] = useState<Documentation[]>(resolveInitial());
  const [filteredList, setFilteredList] = useState<Documentation[]>(resolveInitial());

  useEffect(() => {
    setFilteredList(docs.filter(doc => FilterDocumentations(doc, filter)))
  }, [filter, docs]);

  useHotkeys('ctrl+m', () => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  }

  return (
    <React.Fragment>
      <Modal isOpen={isModalOpen} setIsOpen={toggleModal} styles={MODAL_STYLES}>
        <ModalContent>
          <SearchBar isModalOpen={isModalOpen} filter={filter} setFilter={setFilter} />
          <SearchContent>
            {filteredList && filteredList.length > 0 ? (
              <DocsCards>
                {filteredList.map(doc => <SearchCard key={doc.id} doc={doc} />)}
              </DocsCards>
            ) : (
                <p>No recent searches</p>
              )}
          </SearchContent>
          <Line className="line" />
          <FooterModal>
            <IconArea className="icon-modal">esc</IconArea>
            <Span>to close</Span>
          </FooterModal>
        </ModalContent>
      </Modal>
      <SearchBar isModalOpen={isModalOpen} toggleModal={toggleModal} disabled={true} />
    </React.Fragment>
  );
}

export default Search;

const MODAL_STYLES: Styles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    borderRadius: '4px',
    maxWidth: '565px',
    width: '100%',
    border: 'none',
    boxShadow: '0px 8px 19px 2px rgba(0,0,0,0.1)',
    padding: '0'
  },
  overlay: {
    backgroundColor: 'rgba(18, 18, 20, 0.1)',
  },
}