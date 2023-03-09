/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

/*
Steps for the partition function:
1. the params for this function are an array, a left index, and a right index

2. Pick a middle point in between the left and right index. This value here will be called our pivot

3. Move the middle value, or pivot, to the end of the array(right index) so we can keep track of where it is at.

4. Move the left index to the right until we find a value larger than the pivot and stop

5. Move the right index to the left until we find a value smaller than the pivot

6. swap the values at the left index and the right index.

7. Continue this until the left index and right index cross each other.

8. Once the indexes cross, move the pivot to where left index is

9. Return the index of the pivot
*/
const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const arr2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const arr3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const arr4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} arr
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(arr = [], left = 0, right = arr.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotValue = arr[midIdx];
  const tempPivotIdx = right;

  
  [arr[right], arr[midIdx]] = [arr[midIdx],arr[right]];
  right--;
  while ( true ){
    // console.log(arr)
    
    while(arr[left] < pivotValue){
        left++;
        // console.log("LEFT==========", left)
    }
    // number 5
    while (arr[right] > pivotValue){
        right--;
        // console.log("======RIGHT", right)
    }
    
    if (left >= right){
        [arr[left], arr[tempPivotIdx]] = [arr[tempPivotIdx], arr[left]]
        // console.log('======',left)
        // console.log(arr)
        return left
    }
    [arr[left] , arr[right] ] = [arr[right], arr[left]];
      left++;
      right--;
    
  }
   
  
}
console.log(partition(arr2))

