import React from 'react';
import VideoListItem from './video_list_item.js';


//function component
//props have state from its parent. Check index.js
const VideoList = (props) => {
	//console.log(props.videos)
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			 onVideoSelect={props.onVideoSelect}	
			 key={video.etag} 
			 video={video}/>
		)
	});

	return (
		<ul className="col-md-4 list-group">
		{/*stay away from for loop, use map iterater*/}
		{videoItems}
		</ul>
	);
};

export default VideoList;
