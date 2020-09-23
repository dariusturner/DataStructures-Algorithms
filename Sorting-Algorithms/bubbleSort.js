//Sorts by comparing each index of an array to the next to see which one is greater.
//Then it swaps the larger index with the smaller one till the largest index is to the back of the array.
//This loop continues until the array is sorted.

//Time Complexity is O(n**2)
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//console.log(bubbleSort([4,93,32,1,23]));

//Bubble Sort Optimized - to stop the array from being looped through completely if the array has already completed being sorted.
//Use variable noSwaps to see if there were any swaps preformed in the whole loop of the array.
//If there is no swaps then the loop breaks.
function bubbleSortOpt(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([4,93,32,1,23]));