
jest.mock('../file-reader', () => {
  return () => Promise.resolve('whatever');
});

jest.mock('../file-writer', () => {
  return () => Promise.resolve('whatever');
});

describe('fs tests', () => {

  const readPath = require('../file-reader');
  const toCaps = require('../capitalize-file');
  const writePath = require('../file-writer');


  it('reads file', () => {

    const path = './path.txt';

    return readPath(path)
      .then((result) => {
        expect(result).toBe('whatever');
      });

  });


  it('writes a file', () => {

    const path = './path.txt';
    const text = 'qweqweqwe';

    return writePath(path, text)
      .then(result => {
        expect(result).toBe('whatever');

      });
  });

  it('capitalized text', () => {
    let text = 'abc';
    expect(toCaps(text)).toBe('ABC');
  });
});