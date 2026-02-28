function maxSubArray(nums) {
    if (nums.length === 0) return 0;

    let currentMax = nums[0];
    let globalMax = nums[0];

    // Track start and end indices for the contiguous array
    let currentStart = 0;
    let globalStart = 0;
    let globalEnd = 0;

    for (let i = 1; i < nums.length; i++) {
        // If starting a new array at current index is better than adding it to the previous sum
        if (nums[i] > currentMax + nums[i]) {
            currentMax = nums[i];
            currentStart = i;
        } else {
            currentMax = currentMax + nums[i];
        }

        // Update global maximum if we found a better sum
        if (currentMax > globalMax) {
            globalMax = currentMax;
            globalStart = currentStart;
            globalEnd = i;
        }
    }

    const contiguousSubarray = nums.slice(globalStart, globalEnd + 1);
    console.log(`Maximum Sum Found: ${globalMax}`);
    console.log(`Subarray Start Index: ${globalStart}`);
    console.log(`Subarray End Index: ${globalEnd}`);

    return { maxSum: globalMax, subarray: contiguousSubarray };
}

return maxSubArray(inputArray);
