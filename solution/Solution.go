// Solution in GO
func minSwaps(nums []int) int {
    // Count the total number of 1's in the array
    tot1s := 0
    n := len(nums)
    for ii := 0; ii < n; ii++ {
        tot1s += nums[ii]
    }
    
    // If the array contains all 0's or all 1's, no swaps are needed
    if tot1s <= 1 || tot1s == n {
        return 0
    }

    // Initialize the current number of 1's in the window
    cur1s := 0
    for ii := 0; ii < tot1s; ii++ {
        cur1s += nums[ii]
    }

    // Initialize the maximum number of 1's in the window
    max1s := cur1s

    // Slide the window through the array to find the maximum number of 1's
    for ii := 1; ii <= n; ii++ {
        // Calculate the end index of the window
        wend := (ii + tot1s - 1) % n
        
        // Update the current number of 1's in the window
        cur1s += (nums[wend] - nums[ii-1])
        
        // Update the maximum number of 1's in the window
        max1s = max(max1s, cur1s)
    }

    // Return the minimum number of swaps required
    return tot1s - max1s
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}