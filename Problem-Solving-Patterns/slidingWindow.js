function maxSubarraySum(arr,n) {
    if (n > arr.length) {
        return null;
    }
    //Set start point
    let maxSum = 0;
    let newSum = 0;

    //Loop through array n times starting at the start point
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    newSum = maxSum;

    //Pop off the first index of the old sum and add the next index to find the next sum - Do that for the rest of the array.
    for (let i = n; i < arr.length; i++) {
        newSum = newSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum,newSum);
    }
    //Return the largest sum of n indexes next to each other
    return maxSum;
}

console.log(maxSubarraySum([4,2,1,6,2],4));