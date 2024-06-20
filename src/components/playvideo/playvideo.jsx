import React, {useState} from 'react';
import './playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import {API_KEY,value_converter,} from '../../data';
import moment from 'moment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import download from '../../assets/downloadIcon.png';



const PlayVideo = () => {
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    



    const FetchVideoData= async () => {
      const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      await fetch(VideoDetails_url).then(res => res.json()).then(data=>setApiData(data.items[0]))
      //await fetch(videoList_url).then(response => response.json).then(data=>setData(data.items));

    }

    const FetchChannelData = async () => {
        const ChannelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(ChannelDetails_url).then(res => res.json()).then(data=>setChannelData(data.items[0]))
    }

    const FetchcommentData = async () => {
        const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentDetails_url).then(res => res.json()).then(data=>setCommentData(data.items))
    }


    useEffect(() => {
        FetchVideoData();
    },[videoId])

    useEffect(() => {
        console.log('API data:', apiData);
    }, [apiData]);
    
    const toggleShowMore = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };
    useEffect(() => {
            FetchChannelData();
    }, [apiData]);
    useEffect(() => {
        if (commentData) {
            FetchcommentData();
        }   
    }
    , [apiData]);
    console.log('comment data:', channelData);
    return (
        <div className="playvideo">
          
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay =1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title here"}</h3>

        
        <div className ="video-details">
        <div className ="publisher">
            <img src = {channelData?channelData.snippet.thumbnails.medium.url:""} alt ="" />
             <div>
            <p>
                {apiData?apiData.snippet.channelTitle:"Channel Name"}
            </p>
            <span> {channelData && channelData.statistics ? value_converter(channelData.statistics.subscriberCount) : "125"} subscribers</span>

             </div>
        <button>Subscribe</button>
        </div>
        <div className  ="icons">
            <div className='actions'><img src ={like} alt ="" />{apiData?value_converter(apiData.statistics.likeCount):"125"} </div>
            <div className='actions'><img src ={dislike} alt ="" /></div>
            <div className = 'actions'><img src ={share} alt ="" />share</div>
            <div className = 'actions'><img src ={download} alt ="" />download </div>
            
        </div>


        </div>
        <div className = "vid-description">
        <p>
                {apiData ? (
                    showMore ? apiData.snippet.description : apiData.snippet.description.slice(0, 250)
                ) : "Description here"}
                {apiData && apiData.snippet.description.length > 250 && (
                    <button className="show-more" onClick={toggleShowMore}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                )}
            </p>
            <hr/>
            <h4>{apiData?value_converter(apiData.statistics.commentCount):"125"} Comments</h4>
            {commentData.length > 0 && commentData.map((comment, index)=>{
                return(
                    <div className = "comment" >
                        <img src ={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt ="" />
                        <div>
                            <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className='comment-action'>
                                <img src ={like} alt ="" />
                                <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                                <img src ={dislike} alt ="" />
                            </div>
                        </div>
                    </div>
                )
            }
            )}
           
        </div>
        </div>
        
    );
}

export default PlayVideo;
