/* 
Given by Riot games.
*/

const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

const str2 = 'd20a47b25b25a33c60d50'
const expected2 = 'a80b50c60d70'

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

function rehash(hashedString) {
}

console.log(rehash(str1))



// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
  Given a string, find the length of the longest substring without repeating characters.
*/

// const str1 = 'abcabcbb';
// const expected1 = 3;
// // Explanation: The answer is "abc", with the length of 3.

// const str2 = 'bbbbb';
// const expected2 = 1;
// // Explanation: The answer is "b", with the length of 1.

// const str3 = 'pwwkew';
// const expected3 = 3;
// /* Explanation: The answer is "wke", with the length of 3.
//   Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

// const str4 = 'dvadf';
// const expected4 = 4;
// // Explanation: "vadf"

// /**
//  * Determines the length of the longest substring in the given str.
//  * @param {string} str
//  * @returns {number} Length of the longest substring from the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  */
// function lengthOfLongestSubString(str) {}
