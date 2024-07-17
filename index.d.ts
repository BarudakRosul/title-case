/**
 * Converts a string to title case, where the first letter of each word is capitalized.
 *
 * If the `breakonhyphens` parameter is `true`, the hyphens are considered as word boundaries.
 *
 * @param {boolean} breakonhyphens - A flag indicating whether to break on hyphens as word boundaries.
 * @return {string} The string converted to title case.
 */
interface String {
  toTitle(breakonhyphens?: boolean): string;
}
