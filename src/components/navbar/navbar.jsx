import React, { useState } from 'react';
import './navbar.css';
import menu from '../../assets/menuPng.png';
import youtube from '../../assets/youtube.png';
import search from '../../assets/search.svg';
import avatar from '../../assets/avatar.png';
import notification from '../../assets/notification.png';
import video_add from '../../assets/video_add.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar, setSearchQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", input.trim());
    setSearchQuery(input.trim()); // Ensure to trim whitespace
  };

  return (
    <nav className="navbar">
      <div className="navleft">
        <img src={menu} className="navbar-menu" alt="logo" onClick={() => setSidebar(prev => !prev)} />
        <Link to='/'>
          <img src={youtube} className="navbar-logo" alt="img" height={20} />
        </Link>
      </div>
      <div className="navcenter">
        <div className='navbar-searchbox'>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">
              <img src={search} className='navbar-searchIcon' alt="logo" />
            </button>
          </form>
        </div>
      </div>
      <div className="navright">
        <img src={video_add} className="navbar-upload" alt="logo" height={40} />
        <img src={notification} className="navbar-notification" alt="logo" height={40} />
        <img src={avatar} className="navbar-profile" alt="logo" height={40} />
      </div>
    </nav>
  );
};

export default Navbar;
