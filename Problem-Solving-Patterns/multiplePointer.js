//If the first index + the last index IS EQUAL TO 0 Return the pair
//If the the pair IS GREATER THAN 0 DECREMENT THE LAST INDEX and test it again
//If the the pair IS LESS THAN 0 INCREMENT THE FIRST INDEX and test it again
function sumZero(arr) {
    let beg = 0;
    let end = arr.length - 1;
    while (beg < end) {
        let sum = arr[beg] + arr[end]
        if (sum === 0) {
            return [arr[beg], arr[end]];
        } else if (sum > 0) {
            end--;
        } else {
            beg++;
        }
    }
}

//console.log(sumZero([-5,-3,0,1,2,3,4]))

// Using Frequency Counter Pattern
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let objOfUniques = {};
    for (let val of arr) {
        // if number exists, increment, otherwise set to 1
        objOfUniques[val.toString()] = (objOfUniques[val.toString()] || 0) + 1
    }
    console.log(Object.keys(objOfUniques));
    return Object.keys(objOfUniques).length;
}

//console.log(countUniqueValues([1,1,2,4,6,8,8]))

// Using Mulitple Pointer Pattern
function uniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let scout = 1; scout < arr.length; scout++) {
        if (arr[i] !== arr[scout]) {
            i++;
        }
    }
    //If you want to show an array of all the unique values
    console.log(Array.from(new Set(arr)))
    return i;
}

//console.log(uniqueValues([1,1,2,4,6,8,8]))


//If a pairs average in a sorted array is the target average return true, otherwise return false
function averagePair(arr, ave){
    if (arr.length < 1) {
        return false;
    }
    let index = 0;
    let next = index + 1;
    while (index < arr.length) {
        let currentAverage = (arr[index] + arr[next]) / 2;
        if (index === next) {
            next++;
        }
        //REMOVE COMMENT BELOW TO TEST to see the iteration of the indexes (index and next) and each current average of each pair
        //console.log("CurrentAverage:", currentAverage, "Index Values: ", arr[index], arr[next])
        if (currentAverage === ave) {
            return true;
        }
        if (next === arr.length - 1) {
            index++;
            next = index;
        } else {
            next++;
        }
    }
    return false;
  }

  console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));