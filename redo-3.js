var a = [];
var b = [18];
var c = [100, 23, 10, 8, 1, 0, -1, -5];
var d = [-1, 0, 1, 10, 100];
var e = [-3, 9, 2, 10, -2, -5, -3, 8, 9, 11, 0];

var swap = function (array, start, end) {
  var temp       = array[ start ];
  array[ start ] = array[ end ];
  array[ end ]   = temp;
};

/*
 * Selection Sort
 *
 * The idea behind selection sort is to select minimum value after each pass and
 * swap it with the element at the current index of the pass.
*/

var selectionSort = function (array) {
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

// Bubble Sort


// Insertion Sort


// Merge Sort


// Quick Sort