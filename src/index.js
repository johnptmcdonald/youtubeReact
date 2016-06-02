import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import youTube from '../config/youTube'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import { SearchBar } from './components/SearchBar'
import { VideoList } from './components/VideoList'
import { VideoDetail } from './components/VideoDetail'
const API_KEY = youTube.API_KEY

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('surfboards')
	}

	handleVideoSelect(video){
		this.setState({selectedVideo: video})
	}

	// this should be throttled
	handleSearchTermChange(term){
		this.videoSearch(term)
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})		
	}



	render(){
		const handleSearchTermChange= _.debounce((term)=>{this.handleSearchTermChange(term)}, 500)
		return (
			<div>
				<SearchBar onSearchTermChange={handleSearchTermChange.bind(this)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={this.handleVideoSelect.bind(this)}
				/>
			</div>
		)		
	}

}


ReactDOM.render(<App />, document.querySelector('.container'))



