function chunkArrayInGroups(arr, size) {
  // Break it up.
  var temp = '';
  var new_array = [];
  var start = 0;
  for (i = 0; i < (arr.length / size); ++i) {
      temp = arr.slice(start, start + size);
      new_array.push(temp);
      start += size;
  }
  console.log(new_array);
  return new_array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); # should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); # should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); # should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); # should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); # should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); # should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); # should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
