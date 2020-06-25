import React from 'react';
import ModalContent from './ModalContent';
import './modal.css';

const Modal = props => {
  const { modalIsOpen, item, modalClose, onJoinCommunity, onMeetCommunity } = props;

  return (
    <div className='modalWrapper' style={{display: modalIsOpen ? 'block' : 'none'}}>
      <ModalContent
        item={item}
        modalClose={modalClose}
        onJoinCommunity={onJoinCommunity}
        onMeetCommunity={onMeetCommunity}
      />
    </div>
  );
}

export default Modal;