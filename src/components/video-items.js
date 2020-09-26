import React from 'react'
import './video-item.css'

const VideoItems = ({video, onVideoSelect}) => {
    return (
        <div onClick={()=>onVideoSelect(video)} className="item video-item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
            <p className="header">{video.snippet.title}</p>
            </div>
        </div>
    );
};

export default VideoItems;
