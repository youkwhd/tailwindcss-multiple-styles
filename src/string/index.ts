/**
 * compares the char of `str` at index `index` with char `char`
 *
 * @param {string} str
 * @param {number} index
 * @param {string} char
 *
 * @returns {boolean}
 */
export const stringCompareCharAt = (str: string, index: number, char: string): boolean => str[index] === char

export default { stringCompareCharAt }
