# Solution in PY
from typing import List


class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        # Calculate the total number of ones in the array
        k = sum(nums)
        
        # Initialize the number of ones in the initial window
        ones = sum(nums[-k:])
        
        # Initialize the maximum fill
        max_fill = ones
        
        # Slide the window around the array
        for i in range(len(nums)):
            # Update the number of ones in the current window
            ones += nums[i] - nums[i-k]
            
            # Update the maximum fill
            if ones > max_fill:
                max_fill = ones
        
        # Return the minimum number of swaps required
        return k - max_fill