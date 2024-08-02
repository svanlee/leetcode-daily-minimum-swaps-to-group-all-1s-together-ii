// Solution in JS
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    // Get the length of the input array
    const n = nums.length;
    
    // Count the number of 1's in the array
    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) count1++;
    }
    
    // If the array contains all 0's or all 1's, no swaps are needed
    if (count1 === 0 || count1 === n) return 0;
    
    // Initialize variables to store the maximum and current number of 1's in the window
    let maxOnesInWindow = 0;
    for (let i = 0; i < count1; i++) {
        if (nums[i] === 1) maxOnesInWindow++;
    }
    
    // Initialize the current number of 1's in the window
    let currentOnesInWindow = maxOnesInWindow;
    
    // Iterate through the array to find the maximum number of 1's in the window
    for (let i = 1; i < n; i++) {
        // Remove the oldest element from the window
        if (nums[i - 1] === 1) currentOnesInWindow--;
        
        // Add the new element to the window
        if (nums[(i + count1 - 1) % n] === 1) currentOnesInWindow++;
        
        // Update the maximum number of 1's in the window
        if (currentOnesInWindow > maxOnesInWindow) {
            maxOnesInWindow = currentOnesInWindow;
        }
    }
    
    // Return the minimum number of swaps required
    return count1 - maxOnesInWindow;
};