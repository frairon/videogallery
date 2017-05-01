const yaml = require('js-yaml');
const fs = require('fs');

class Loader {
  constructor() {
    this.videos = [];
  }

  load(file) {
    this.videos = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
    console.log("Loaded", this.videos.videos.length, "videos");
  }
};

module.exports = {Loader};
