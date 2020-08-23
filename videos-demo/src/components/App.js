import React, { Component } from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

  }

  componentDidMount(){
    this.onTermSubmit('children');
  }


  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    });
    //console.log(response.data);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
            
          </div>
        </div>
      </div>

    );
  }
}

export default App