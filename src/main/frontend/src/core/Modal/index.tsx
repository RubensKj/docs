import React, { useEffect, useState } from 'react';
import ReactModal, { Styles } from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
  styles?: Styles;
}

const DEFAULT_STYLE = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    borderRadius: '8px',
    maxWidth: '520px',
    width: '100%',
    border: 'none',
    boxShadow: '0px 8px 19px 2px rgba(0,0,0,0.1)'
  },
  overlay: {
    backgroundColor: 'rgba(18, 18, 20, 0.1)',
  },
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen, styles }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={styles ? styles : DEFAULT_STYLE}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;