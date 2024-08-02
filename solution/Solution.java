// Solution in JAVA
class Solution {
    public int minSwaps(int[] nums) {
        // Calculate the total number of 1's in the array
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            k += nums[i];
        }
        
        // Initialize variables to store the current sum and minimum swaps
        int sum = 0;
        int min = nums.length;
        
        // Iterate through the array to calculate the minimum swaps for the first window
        for (int j = 0; j < nums.length; j++) {
            // Add the current element to the sum
            sum += nums[j];
            
            // If the window size is larger than k, remove the oldest element
            if (j >= k) {
                sum -= nums[j - k];
            }
            
            // Update the minimum swaps if the current window has more 1's
            if (j >= k - 1) {
                min = Math.min(min, k - sum);
            }
        }
        
        // Iterate through the array again to calculate the minimum swaps for the remaining windows
        for (int i = 0; i <= k - 2; i++) {
            // Update the sum by adding the new element and removing the oldest element
            sum = sum + nums[i] - nums[nums.length - k + i];
            
            // Update the minimum swaps if the current window has more 1's
            min = Math.min(min, k - sum);
        }
        
        // Return the minimum swaps
        return min;
    }
}