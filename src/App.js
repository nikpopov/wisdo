import React from 'react';
import './App.css';
import Header from './components/Header';
import CommunityContainer from './communities/CommunityContainer';

const App = () => {
  return (
    <div>
      <Header />
      <CommunityContainer />
    </div>
  );
}

export default App;
