/* 
https://visualgo.net/en/sorting
    
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.
Unstable sort.

Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10
    sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {
    const len = numbers.length;
    let selectedIdx = 0;
    let idxOfCurrMin = 0;

    while (selectedIdx < len) {
        for (let i = selectedIdx; i < len; i++) {
            if (numbers[i] < numbers[idxOfCurrMin]) {
                idxOfCurrMin = i;
            }
        }

        if (numbers[selectedIdx] !== numbers[idxOfCurrMin]) {
            // Swap.
            [numbers[selectedIdx], numbers[idxOfCurrMin]] = [
                numbers[idxOfCurrMin],
                numbers[selectedIdx],
            ];
        }
        selectedIdx += 1;
        // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
        idxOfCurrMin = selectedIdx;
    }
    return numbers;
}


/* 
shifting steps:
1. consider the first item as sorted
2. move to the next item
3. store current item in a temp var (to make this position available to shift items)
4. if item to the left of current is greater than current item, shift the
    left item to the right.
5. repeat step 4 as many times as needed
6. insert current item
7. move to the next item and repeat
swap steps:
1. consider the first item as sorted
2. move to the next item
4. if item to left of current item is less than current, swap
5. repeat step 4 until item to left is less than current item
6. move to next item and repeat
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(nums = []) { }


function insertionSort(nums = []) {
    for (let i = 1; i < nums.length; i++) {
        let currIdx = i; // 1. so we don't accidentally change i, 2. easier to read
        let leftIdx = currIdx - 1 //compare the current value to the left

        while (leftIdx >= 0 && nums[leftIdx] > nums[currIdx]) {
            // 1. don't go to -1 index
            // 2.  compare the value at leftIdx to currIdx
            // if true, then we need to swap to the left
            
            // destructure swap notation
            [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]]

            //  temp notation
            // let temp = nums[currIdx];
            // nums[currIdx] = nums[leftIdx]
            // nums[leftIdx] = temp

            // currIdx was swaped to the left, so we move currIdx to the left
            currIdx--;
            leftIdx = currIdx - 1;
        }
    }

    return nums
}