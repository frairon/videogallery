
const React =  require('react');
const ReactDOM =  require('react-dom');
const { Loader } = require('./loader');

// redux
import { createStore } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';

var loader = new Loader();
loader.load('videos.yml');

class Video extends React.Component{
  render(){
    return <video id="my-video" class="video-js" controls preload="auto" width="640" height="264"
       data-setup="">
        <source src={this.props.video.file} type='video/mp4' />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p> onclick={this.props.updater(..)}
      </video>

  //  return <p>Video {this.props.video.file}</p>
  }
};

class Main extends React.Component{
  render(){
    var video = {name:"blubb"};
    return <div>
      {this.renderVideos()}
    </div>;
  }
  updateVideo(){
  }
  renderVideos(){
    var vids = [];
    for(var i=0; i<loader.videos.videos.length; i++){
      var vid = loader.videos.videos[i];
      vids.push(<Video video={vid} key={i} updater={this.updateVideo} />);
    }
    return vids;
  }
}



ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
