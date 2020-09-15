// Time Complexity of O(n**2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1);
    }
    return true;
}


var testA = [1,2,3,2,5];
var testB = [9,1,4,4,25];

//console.log(same(testA,testB));

// Frequency Counter Pattern uses objects to store data from strings or arrays without using nested loops to compare them against eachother.

// Using the Frequency Counter Pattern - Time Complexity of O(n)
function fastSame(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

//console.log(fastSame([1,2,3,2,5], [9,1,4,4,11]));

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let object1 = {}
    let object2 = {}
    for (let val of str1.toLowerCase()) {
        // if letter exists, increment, otherwise set to 1
        object1[val] = (object1[val] || 0) + 1
    }
    for (let val of str2.toLowerCase()) {
        object2[val] = (object2[val] || 0) + 1
    }
    // Check if keys are the same and if their values are the same too
    for (let key in object1) {
        // If key is not in object2 return false
        if (!(key in object2)) {
            return false;
        }
        // If both objects key's don't have the same value, return false
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('annal', 'Lnana'))