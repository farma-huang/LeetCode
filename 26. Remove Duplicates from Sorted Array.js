/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    while(Number.isInteger(nums[i])) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i += 1;
        }
    }
};