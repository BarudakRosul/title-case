require("@barudakrosul/split-words");

/**
 * Converts a string to title case, where the first letter of each word is capitalized.
 *
 * If the `breakonhyphens` parameter is `true`, the hyphens are considered as word boundaries.
 *
 * @param {boolean} breakonhyphens - A flag indicating whether to break on hyphens as word boundaries.
 * @return {string} The string converted to title case.
 */
String.prototype.toTitle = function (breakonhyphens = true) {
  let words
  if (breakonhyphens === true) {
    words = this.toLowerCase().splitWords(true, true);
  } else {
    words = this.toLowerCase().splitWords(true, false);
  }

  let chunks = [];

  for (let i = 0; i < words.length; i++) {
    let char = words[i].split("");
    char[0] = char[0].toUpperCase();
    chunks.push(char.join(""));
  }

  return chunks.join("");
}
