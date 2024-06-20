import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';
import moment from 'moment';
import { API_KEY, value_converter } from '../../data';

const Feed = ({ category, searchQuery }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let url;
    if (searchQuery) {
      url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=50&key=${API_KEY}`;
    } else {
      url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log('API response:', data);
    setData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <div className='feed'>
      {console.log('Fetched data:', data)}
      {data.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id.videoId || item.id}`} className='card link-no-underline' key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt='thumbnail' />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics?.viewCount || 0)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
