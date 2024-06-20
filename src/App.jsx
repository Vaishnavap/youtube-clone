import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Videos from './videos/videos';
import Home from './pages/Home/home';
import Navbar from './components/navbar/navbar';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar setSidebar={setSidebar} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Videos />} />
      </Routes>
    </div>
  );
};

export default App;
