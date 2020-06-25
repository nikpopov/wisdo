import React, { useState } from 'react';
import CommunityItem from './CommunityItem';

const CommunityList = props => {
  const { list, onModalItemOpen } = props;
  const [position, setPosition] = useState(0);

  return (
    <div className='communityListContainer'>
      <button
        className='slideLeft'
        onClick={() => setPosition(position - 1)}
        disabled={position <=0}
      >Left
      </button>
      <button
        className='slideRight'
        onClick={() => setPosition(position + 1)}
        disabled={position >= list.items.length - 4}
      >
        Right
      </button>
      <h3>
        {list.categoryName}
      </h3>
      {list.items && list.items.length
      ?
        <div className='communityListWrapper'>
          <div className='communityList' style={{left: (-17.2 * position).toString() + 'rem'}}>
            {list.items.map((item, i) => <CommunityItem key={i} item={item} onModalItemOpen={onModalItemOpen}/>)}
          </div>
        </div>
      : null}
    </div>
  );
}

export default CommunityList;
