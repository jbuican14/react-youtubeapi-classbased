import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const renderdVideoList = videos.map((video)=> {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    });
    
    //props.videos
    return (
        <div className="ui relaxed divided list"> {renderdVideoList}</div>
    )
};

export default VideoList;