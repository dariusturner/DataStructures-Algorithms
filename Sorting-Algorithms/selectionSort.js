//The Selection Sort is the opposite of Bubble Sort, it sorts from the front(smallest) to the back(largest)
//Loops through to find the smallest index and then swaps indexes with the index 0 and so on.

//Time Complexity is O(n**2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([32,27,10,29,12,18]));



// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number  to be the new "minimum" and continue untile the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values