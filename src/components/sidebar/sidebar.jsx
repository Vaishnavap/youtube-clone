import React from 'react';
import './sidebar.css';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import news from '../../assets/news.png';
import blogs from '../../assets/blogs.png';
import megan from '../../assets/megan.png';
import tom from '../../assets/tom.png';
import simon from '../../assets/simon.png';
import cameron from '../../assets/cameron.png';
import home from '../../assets/homeicon.png';
import shorts from  '../../assets/shorts.png';
import subscription from '../../assets/subscription.svg'
import history from '../../assets/history.png';
import playlist from '../../assets/playlist.png';
import you from '../../assets/you.png';
const Sidebar = ({ sidebar,category,setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-link">
        {sidebar ? (
          <>
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
              <img src={home} alt="img" /><p>Home</p>
            </div>
            <div className="side-link">
              <img src={shorts} alt="img" /><p>Shorts</p>
              </div>
            <div className = "side-link">
              <img src={subscription} alt="img" /><p>Subscription</p>
            </div>
            <hr>
            </hr>
            <div className="side-link">
              <p><b>You</b></p>
              </div>
            <div className = "side-link">
              <img src={subscription} alt="img" /><p>Subscription</p>
            </div>
            <div className="side-link">
              <img src={history} alt="img" /><p>history</p>
              </div>
            <div className = "side-link">
              <img src={playlist} alt="img" /><p>Playlist</p>
            </div>
            <div className="side-link">
              <p><b>Explore</b></p>
              </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
              <img src={game_icon} alt="img" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
              <img src={automobiles} alt="img" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
              <img src={sports} alt="img" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
              <img src={entertainment} alt="img" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
              <img src={tech} alt="img" /><p>Tech</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
              <img src={music} alt="img" /><p>Music</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
              <img src={news} alt="img" /><p>News</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
              <img src={blogs} alt="img" /><p>Blogs</p>
            </div>
            <hr />
          </>
        ) : (
          <>
            <div className="side-link" onClick={()=>setCategory(0)}>
              <img src={home} alt="img" />
              Home
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
              <img src={shorts} alt="img" />
              Shorts
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
              <img src={subscription} alt="img" />
              Playlists
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
              <img src={you} alt="img" />
              You
            </div>
          </>
        )}
      </div>
      {sidebar && (
        <div className="subscribed-list">
          <h3>Subscribed Channels</h3>
          <div className="subscribed-channel">
            <img src={tom} alt="img" /><p>Tom Scott</p>
          </div>
          <div className="subscribed-channel">
            <img src={simon} alt="img" /><p>Simon Clark</p>
          </div>
          <div className="subscribed-channel">
            <img src={cameron} alt="img" /><p>Cameron</p>
          </div>
          <div className="subscribed-channel">
            <img src={megan} alt="img" /><p>Jack</p>
          </div>
        </div>
      )}
  </div>
 );
}

export default Sidebar;
