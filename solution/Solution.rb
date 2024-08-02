# Solutiion in RUBY

def min_swaps(nums)
    # Count the total number of 1's in the array
    tot1s = nums.sum

    # If the array contains all 0's or all 1's, no swaps are needed
    return 0 if tot1s <= 1 || tot1s == nums.length

    # Initialize the current number of 1's in the window
    cur1s = 0
    for ii in 0...tot1s
        cur1s += nums[ii]
    end

    # Initialize the maximum number of 1's in the window
    max1s = cur1s

    # Slide the window through the array to find the maximum number of 1's
    for ii in 1...nums.length
        # Calculate the end index of the window
        wend = (ii + tot1s - 1) % nums.length

        # Update the current number of 1's in the window
        cur1s += (nums[wend] - nums[ii-1])

        # Update the maximum number of 1's in the window
        max1s = [max1s, cur1s].max
    end

    # Return the minimum number of swaps required
    return tot1s - max1s
end