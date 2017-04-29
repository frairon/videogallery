
const React =  require('react');
const ReactDOM =  require('react-dom');
const { Loader } = require('./loader');

var loader = new Loader();
loader.load('videos.yml');


class Main extends React.Component{
  render(){
    return <h1>hello world</h1>;
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
