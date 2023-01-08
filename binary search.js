/* give an non-decresing Array and find (some) the idx of target number by using binary search.
if there's no such number exists, return -1.

e.g. [1,2,3,3,3,3,4,5,6,7,8,8,9], target 3
acceptable result: 2 or 3 or 4 or 5

e.g. [1,2,3,3,3,3,4,5,6,7,8,8,9], target 23
should return -1 */
const binarySearch = function(arr, t) {
    let head = 0, tail = arr.length - 1;

    if (arr[head] === t) {
        return head;
    }

    if (arr[tail] === t) {
        return tail;
    }

    while (head < tail) {
        let middle = Math.floor((head + tail) / 2) + head;
        if (arr[middle] === t) {
            return middle;
        } else if (arr[middle] > t) {
            tail = middle - 1;
        } else {
            head = middle + 1;
        }
    }

    return -1;
};

console.log(binarySearch([1,2,3,3,3,3,4,5,6,7,8,8,9], 9));
// console.log(binarySearch([1,2,3,3,3,3,4,5,6,7,8,8,9], 23));