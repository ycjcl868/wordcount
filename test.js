'use strict';

require('mocha');
var assert = require('assert');
var wordcount = require('./');


describe('match words', function () {
  it('should match words in a string:', function () {
    assert.deepEqual(wordcount('foo bar baz'), 3);
    assert.deepEqual(wordcount('foo baz'), 2);
  });

  it('should count the words in a string.', function () {
    assert.strictEqual(wordcount('Count the words in string.'), 5);
    assert.strictEqual(wordcount('Count the words in string, again.'), 6);
  });

  it('should count the words in a cyrillic string.', function () {
    assert.strictEqual(wordcount('Тест стринг кирилица.'), 3)
  });

  it('should count the words in mixed latin and cyrillic string', function () {
    assert.strictEqual(wordcount('Тест mixed стринг кирилица and latin string.'), 7)
  });

  it('should count the words in mixed chinese (traditional) and latin string', function () {
    assert.strictEqual(wordcount('We are 我们是 朋友 from China'), 6);
  });

  it('should count the words in korean-latin-cyrillic string', function () {
    assert.strictEqual(wordcount('I am from България, and speak 한국어 언어'), 8);
  });

  it('should count the words in html tags', function () {
    assert.strictEqual(wordcount('<p>should 你好 html</p><br /><p>hello</p>'), 4);
  });

});
