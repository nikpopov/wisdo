import React, { useState } from 'react';


const ModalContent = props => {
  const { item, modalClose, onJoinCommunity, onMeetCommunity } = props;
  const [page, setPage] = useState(0);
  const closeModal = () => {
    modalClose();
    if (page > 0) {
      setPage(page - 1)
    }
  }

  if (item) {
    switch (page) {
      case 0:
        return (
          <div className='modalContent'>
            <button className='modalClose' onClick={closeModal}>X</button>
            <div className='modalHeader'>
              <span className='modalHeaderTitle'><strong>{item.membersCount}</strong> people can you help</span>
              <button className='modalButton positionRight pink' onClick={() => setPage(page + 1)}><strong>Next</strong></button>
            </div>
            <div
              className='modalImageBlock'
              style={{backgroundImage: 'url(' + item.image + ')'}}
            ></div>
            <div className='modalTitle'><h3>{item.title}</h3></div>
            <div className='modalDescription'>{item.description}</div>
            <div className='modalImpression'>
              <h3>Thinking about them a lot</h3>
              <div className='impressionButtons'>
                <button className='impressionButton'>Been There</button>
                <button className='impressionButton'>There Now</button>
              </div>
            </div>
            <div className='joinCommunity'>
              <button
                className='btnJoinCommunity'
                onClick={() => onJoinCommunity()}
              >
                Join community
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className='modalContent'>
            <button className='modalClose' onClick={() => modalClose()}>X</button>
            <button className='modalPrevious' onClick={() => setPage(page - 1)}>Back</button>
            <div className='modalHeader'>
              <span className='modalHeaderTitle'><strong>Step 3/3:</strong> Welcome</span>
            </div>
            <div className='modalTitle'><h3>We're so glad you joined!</h3></div>
            <div className='modalDescription'>
              Mentors, Helpers and people just like you are their experience like you. Let's learn from each other and grow together
            </div>
            <div className='joinCommunity'>
              <button
                className='btnJoinCommunity'
                onClick={() => onMeetCommunity()}
              >
                Meet community
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }

  }
  return null;
}

export default ModalContent;