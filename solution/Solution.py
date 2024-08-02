# Solution in PY
from typing import List

class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        ones = nums.count(1)
        min_swaps = float('inf')
        curr_ones = 0
        
        # Initialize the window
        for i in range(ones):
            curr_ones += nums[i]
        
        # Update the minimum number of swaps
        min_swaps = min(min_swaps, ones - curr_ones)
        
        # Move the window around the array
        for i in range(ones, n + ones):
            # Remove the leftmost element from the window
            curr_ones -= nums[i - ones]
            
            # Add the new element to the window
            curr_ones += nums[i % n]
            
            # Update the minimum number of swaps
            min_swaps = min(min_swaps, ones - curr_ones)
        
        return min_swaps