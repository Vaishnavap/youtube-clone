import React, { useState } from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/Feed/feed';

const Home = ({ sidebar, searchQuery, setSearchQuery }) => {
  const [category, setCategory] = useState(0);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery(''); // Reset searchQuery when category changes
  };

  return (
    <div className='home'>
      <Sidebar sidebar={sidebar} category={category} setCategory={handleCategoryChange} />
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed category={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
