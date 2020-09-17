//Divide and Conquer Pattern splits arrays in half to significantlly reduce searching alogorithms to Log(N)
function search(arr, n) {
    // Set the start and end of array to keep your code clean
    let min = 0;
    let max = arr.length - 1;
    // Use a while loop 
    while (min <= max) {
        // Set variables to keep code clean to find the middle index of the array 
        let middle = Math.floor((min + max) / 2);
        let midIndex = arr[middle];
        //If the middle index is GREATER THAN the value being searched update the min to start from the index past the midIndex
        if (midIndex < n) {
            min = middle + 1;
        } else if (midIndex > n) {
            //If the middle index is LESS THAN the value being searched update the max to end at the index before the midIndex
            max = middle - 1;
        } else {
            return "The value of " + n + " was found at the index " + middle;
        }
    }
    //If the value is not found return -1
    return -1;
}

console.log(search([1,5,6,7,8,30,55,100,139],30));