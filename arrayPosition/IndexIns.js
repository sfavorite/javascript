
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  position = arr.length;
  arr.sort(function(a, b) {
    return a - b;
  });

  console.log('sorted ', arr);
  for (i =0; i < arr.length; ++i) {
      if (num <= arr[i]) {
          position = i;
          console.log(i);
          break;
      }
  }

  return position;
}

getIndexToIns([40, 60], 50); // Returns 1
getIndexToIns([10, 20, 30, 40, 50], 35) // Returns  3
getIndexToIns([10, 20, 30, 40, 50], 30) // Returns 2
getIndexToIns([40, 60], 50) // Returns 1
getIndexToIns([3, 10, 5], 3) // Returns 0
getIndexToIns([5, 3, 20, 3], 5) // Returns 2
