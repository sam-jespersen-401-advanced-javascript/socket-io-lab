const fs = require('fs').promises;

function readPath(path) {
  return fs.readFile(path, 'utf-8', (err, data) => {
    if(err) throw err;
    return data;
  });
}

module.exports = {
  readPath
};