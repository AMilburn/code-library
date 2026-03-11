/**
 * PROBLEM: Find a contiguous subarray whose length is k that has the maximum average value.
 * 
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The size of the window.
 * @returns {number} - The maximum average value.
 */
function findMaxAverage(nums, k) {
    let sum = 0;
    // Initialize sum with the first window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
}

return findMaxAverage(nums, k);
