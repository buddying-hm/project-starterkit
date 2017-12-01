import sample from './sample';

describe('sample', () => {
  it('sample name is SAMPLE', () => {
    expect(sample.name).toBe('SAMPLE');
  });
});

describe('dom test sample', () => {
  it('textContent is hi', () => {
    document.body.innerHTML = '<p id="text">hi</p>';
    const text = document.getElementById('text').textContent;
    expect(text).toBe('hi');
  });
});

describe('use jquery', () => {
  const $ = require('jquery');

  it('replace text', () => {
    document.body.innerHTML = '<p id="text">hi</p>';
    $('#text').text('hello');
    expect($('#text').text()).toBe('hello');
  });
});
