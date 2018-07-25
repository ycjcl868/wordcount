/*!
 * match-words <https://github.com/jonschlinkert/match-words>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var regex = require('word-regex');

module.exports = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  var pureWord = str.replace(/<br\s*\/?>/, '\n')
                    .replace(/<(?:.|\n)*?>/gm, '');
  if (pureWord.length > 0) {
    return pureWord.match(regex()).length;
  }
  return 0;
};
