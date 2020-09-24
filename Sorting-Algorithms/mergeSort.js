function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

//console.log(merge([1,10,50], [2,14,99,100]))

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return (merge(left, right));
}

console.log(mergeSort([1,39,33,338,32,34,0,40,18,3,89,10,28]))
// In order to implement Merge mergeSort, it's useful to first implement a function responsible for merging two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays.
// This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.