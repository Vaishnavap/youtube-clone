import React, { useEffect } from "react";
import { useState } from "react";
import "./recommendation.css";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";



const Recommendation = ({categoryId}) => {

const [apiData, setApiData] = useState(null);

const FetchVideoData= async () => {
    if(categoryId ==undefined){
        const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}` 
        await fetch(VideoDetails_url).then(res => res.json()).then(data=>setApiData(data.items))
        console.log('categoryId', categoryId)
    }
    else{
        const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=0&key=${API_KEY}`
        await fetch(VideoDetails_url).then(res => res.json()).then(data=>setApiData(data.items))
        

    }//fetching the data from the API
}
    useEffect(() => {
        FetchVideoData();
    },[])


    return (
        <div className="recommendation">
            {apiData && apiData.map((item) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                )
            })
            }

        </div>
    );
}
export default Recommendation;