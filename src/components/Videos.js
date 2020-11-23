import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'
import Header from './Header';

const Videos = () => {
 
 const [selectedVideo, setSelectedVideo] = useState(null);
 const [videos, search] = useVideos('lowfi')

 useEffect(() => {
    setSelectedVideo(videos[0]);
 }, [videos]);



   // setSelectedVideo(response.data.items[0])

 return (
  
 <div className="ui container">
     <Header/>
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect ={setSelectedVideo} videos={videos}/>
            </div>
         </div>
    </div>
 </div>
 );

};


export default Videos;