import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Styles } from 'react-modal';

// Components
import SearchBar from './search-bar';
import Modal from '../../../core/Modal';

import { ModalContent, SearchContent, FooterModal, IconArea } from './styles';
import { Line, Span } from '../../../core/Styles/utils';

export interface SearchProps {
  isModalOpen?: boolean;
  toggleModal?: () => void;

  disabled?: boolean;
}

const Search: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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
          <SearchBar isModalOpen={isModalOpen} />
          <SearchContent>
            <p>No recent searches</p>
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