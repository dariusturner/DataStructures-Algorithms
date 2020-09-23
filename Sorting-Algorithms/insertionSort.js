//Insertion Sort Algorithm loops through the array.
//Then it loops backwards to test if the value of the current index is less than the indexes before it.
//When the current index is larger than the next index then swap the current index with the index after the one you found it greater than (arr[j + 1]).

//Time Complexity is O(n**2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal ; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([3,1,39,19,30]));

//Start by picking the second element in the array.
//Now compare the second element with the one before it and swap if necessary.
//Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
//Repeat until the array is sorted.