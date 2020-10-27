import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCLr46xh8fvpe6azbgETy5UV0Oywun1keQ';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onTermSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        }); //console.log(res.data.items);

        this.setState({ 
            videos: res.data.items,
            selectedVideo: res.data.items[0], //fixing the new search 
        });
    }

    onVideoSelect = (video) => {
        // console.log('from onvideoSelect app.js', video);
        this.setState({ selectedVideo: video });
    };

    componentDidMount() {
        this.onTermSubmit('children halloween');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/* <SearchBar onTermSubmit={this.onTermSubmit} />  prof work */}
                {/* <p>I have {this.state.videos.length} videos. </p> */}
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
        )
    }
}
export default App; 