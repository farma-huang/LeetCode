/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let progress = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = progress; j < nums.length; j++) {
            if (nums[j] !== i) {
                let k = nums.length - 1;
                while (j < k) {
                    if (nums[k] === i) {
                        nums[k] = nums[j]
                        nums[j] = i;
                        progress += 1;
                        break;
                    } else {
                        k--;
                    }
                }
            } else {
                progress += 1;
                continue;
            }
        }
    }

    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
