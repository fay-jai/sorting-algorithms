var empty   = [];
var one     = [1];
var inorder = [-5, -1, 0, 4, 9];
var reverse = [10, 8, 5, 3, -1, -7];
var random  = [-1, 6, 10, 2, -6, -1, 0, -3, 8, 9, 6, 10];

var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

var insertionSort = function (array) {
  var len = array.length;
  var i, j, minIdx;

  for (i = 0; i < len - 1; i += 1) {
    minIdx = i;
    for (j = i + 1; j < len; j += 1) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    swap(array, i, minIdx);
  }

  return array;
};