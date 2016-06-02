import React from 'react'

export const VideoListItem = (props) => {
	const imageUrl = props.video.snippet.thumbnails.default.url

	function handleVideoClick(){
		console.log(props.video)
		props.onVideoSelect(props.video)
	}

	return (
		<li onClick={handleVideoClick} className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} alt=""/>
				</div>
				
				<div className="media-body">
					<div className="media-heading">
						{props.video.snippet.title}
					</div>
				</div>
			</div>

		</li>
	)
}