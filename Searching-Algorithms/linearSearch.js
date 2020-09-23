//Linear Search searches an array through each index of an array from the beggining or end.
//Time Complexity is O(n).
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,56,0,7], 29));