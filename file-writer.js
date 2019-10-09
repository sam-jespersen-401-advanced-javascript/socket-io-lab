const fs = require('fs').promises;

function writePath(path, data) {
  return fs.writeFile(path, data, (err) => {
    if(err) throw err;
    console.log('File written!');
  });
}

module.exports = {
  writePath
};