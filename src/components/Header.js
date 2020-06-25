import React from 'react';

const Header = props => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className='title'>
        <h3>Explore</h3>
      </div>
      <div className='buttons'>
        <button className='headerButton'>Explore communities</button>
        <button className='headerButton'>Log in</button>
        <button className='headerButton'>Sign up</button>
      </div>
    </div>
  );
}

export default Header;