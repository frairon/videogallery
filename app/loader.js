const yaml = require('js-yaml');
const fs = require('fs');

class Loader {
  constructor() {}

  load(file) {
    var doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
    console.log(doc);
  }
};

module.exports = {Loader};
