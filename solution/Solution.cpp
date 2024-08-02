// Solution in CPP
class Solution
{
public:
    int minSwaps(vector<int> &nums)
    {
        // Count the total number of ones in the array
        int k = count(nums.begin(), nums.end(), 1);

        // Initialize the number of ones in the current window
        int ones = 0;

        // Initialize the maximum number of ones in any window
        int max_ones = 0;

        // Slide the window around the array
        for (int i = 0; i < nums.size(); i++)
        {
            // Add the current element to the window
            ones += nums[i];

            // If the window size is larger than k, remove the oldest element
            if (i >= k)
                ones -= nums[i - k];

            // Update the maximum number of ones in any window
            max_ones = max(max_ones, ones);
        }

        // Return the minimum number of swaps required
        return k - max_ones;
    }
};