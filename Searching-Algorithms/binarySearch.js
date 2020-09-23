//Binary search is a much faster form of search by eliminating HALF of the remaining elements at once.
//To use this search method it only works on sorted arrays.
//This Searching Algorithm uses the Divide & Conquer - Problem Solving Pattern.
//Time Complexity O(log n)
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === val) return middle;
        if (arr[middle] < val) left = middle + 1;
        if (arr[middle] > val) right = middle - 1;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,6,7,10,39,95,3039,39507],3039))