import React from 'react';
import { useParams } from 'react-router-dom';
import './videos.css';
import PlayVideo from '../components/playvideo/playvideo';
import Recommendation from '../components/Recommendation/recommendation';
const Videos = () => {
    const {videoId,categoryId}  = useParams();
    return (
        <div className="play-container">
            <PlayVideo videoId = {videoId}/>
            <Recommendation categoryId={categoryId}/>
        </div>
    );
}
export default Videos;