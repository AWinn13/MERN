// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {
    const numbersToIndex = {};
  
    for (let i = 0; i < numbers.length; i++) {
      const numA = numbers[i];
      const numB = targetSum - numA;
  
      if (numbersToIndex.hasOwnProperty(numB)) {
        const idxB = numbersToIndex[numB];
        return [idxB, i];
      }
      numbersToIndex[numA] = i;
    }
    return [];
  }
// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const numbers4 = [1, 1, 1, 2, 2, 3];
const k4 = 2;
const expected4 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const numbers5 = [0, 0, 0, 2, 2, 3];
const k5 = 1;
const expected5 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers6 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k6 = 3;
const expected6 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
/**
 * - Time: O(n) linear because the the methods called inside loops are
 *    O(1) constant time: .push, .pop, .hasOwnProperty.
 * - Space: O(3n) -> O(n) linear.
 */
function kMostFrequent(numbers, k) {
    const mostFrequentNumbers = [];
    const numToFrequency = new Map();
    const frequencyToNumbers = new Map();
    let maxFrequency = 0;
  
    for (const num of numbers) {
      if (numToFrequency.has(num) === false) {
        numToFrequency.set(num, 0);
      }
      const newFrequency = numToFrequency.get(num) + 1;
      numToFrequency.set(num, newFrequency);
  
      if (newFrequency > maxFrequency) {
        maxFrequency = newFrequency;
      }
    }
  
    /* 
    build a frequency table that is a reverse of the above so we can look up
    starting from a frequency to find what numbers have that frequency.
    since multiple numbers can have the same frequency, the value of this table
    needs to be an array.
    */
    for (const [num, frequency] of numToFrequency) {
      if (frequencyToNumbers.has(frequency) === false) {
        frequencyToNumbers.set(frequency, []);
      }
      frequencyToNumbers.get(frequency).push(num);
    }
  
    console.log("numToFrequency:", numToFrequency);
    console.log("frequencyToNumbers:", frequencyToNumbers);
    console.log("maxFreq:", maxFrequency);
  
    let nextMostFrequent = maxFrequency;
  
    while (mostFrequentNumbers.length < k && nextMostFrequent > 0) {
      // .has, .get, .push, .pop are all O(1) constant time.
      if (
        frequencyToNumbers.has(nextMostFrequent) &&
        frequencyToNumbers.get(nextMostFrequent).length > 0
      ) {
        const nextMostFreqNum = frequencyToNumbers.get(nextMostFrequent).pop();
        mostFrequentNumbers.push(nextMostFreqNum);
      } else {
        // no numbers have this frequency, decrement to check for next most freq
        nextMostFrequent--;
      }
    }
    return mostFrequentNumbers;
  }


  /**
 * - Time: O(n) + O(n) + O(n^2) + O(k) -> O(n^2) quadratic due to sort's worst
 *    case.
 * - Space: O(n) linear.
 */
function kMostFrequentSort(numbers, k) {
    const frequencies = new Map();
  
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      if (frequencies.has(num)) {
        frequencies.set(num, frequencies.get(num) + 1);
      } else {
        frequencies.set(num, 1);
      }
    }
  
    const keys = [...frequencies.keys()];
  
    // sort gives us two elements side by side, A and B, a - b sorts ascending, b - a for descending
    keys.sort((numA, numB) => {
      const frequencyA = frequencies.get(numA);
      const frequencyB = frequencies.get(numB);
      return frequencyB - frequencyA;
    });
  
    // slice only the first k keys, if using a plain object for the freq table instead of the
    // built in Map object, would need to convert the keys back to ints, could do this with .map
    return keys.slice(0, k);
  }


// HACKY
//   function kMostFrequent(arr, k) {
//     let newArr = [];
//     var count = 0
//     for (let x = 0; x < arr.length; x++) {
//       for (let y = x + 1; y < arr.length; y++) {
//         if (arr[x] === arr[y]) {
//           count++
//           if ((count > 1) && !newArr.includes(arr[x])) {
//             newArr.push(arr[x])
//           }
//         }
//       }
//     }
//     return newArr.slice(0, k)
//   }