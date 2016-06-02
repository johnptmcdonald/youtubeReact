import React from 'react';
import { VideoListItem } from './VideoListItem'

export const VideoList = (props) => {
	const videoItems = props.videos.map((video, index) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video}
			/>
		)
	})

	return (
		<ul className="col-lg-4 list-group">
			{videoItems}
		</ul>
	)
}


