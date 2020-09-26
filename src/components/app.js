import React, { Component } from 'react'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoDetail from './videoDetail'

import youtube from '../api/youtube'


export default class App extends Component {
    state = {videos: [], selectedvideos:null }

    componentDidMount(){
        this.onTermSubmit("clever programer")
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params:{
                q: {term},
            }
        });
        // this.setState({videos: response.data.items});
        this.setState({
            videos: response.data.items,
            selectedvideos: response.data.items[0]
        })
    };

    onVideoSelete = (video) => {
        this.setState({selectedvideos: video})
    }
    
    
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className ="eleven wide column">
                            <VideoDetail video={this.state.selectedvideos} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelete} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
