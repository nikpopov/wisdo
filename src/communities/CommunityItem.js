import React from 'react';

const CommunityItem = props => {
  const { item, onModalItemOpen } = props;

  return (
    <div className='communityItem'>
      <div
        className='itemImage'
        style={{backgroundImage: 'url(' + item.image + ')'}}
        onClick={() => {onModalItemOpen(item)}}
      ></div>
      <h4>{item.title}</h4>
      <h5>{item.membersCount} Members</h5>
    </div>
  );
}

export default CommunityItem;