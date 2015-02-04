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

/*
 * Bubble Sort
 *
 * The idea behind bubble sort is to continuously swap each pair of items so that
 * the max of the 2 values keeps moving towards the end of the array. Each subsequent
 * pass through the elements can check one less item (at the end of the array).
*/

var bubbleSort = function (array) {
  var len = array.length;
  var i, j, hasSwap;

  for (i = 0; i < len; i += 1) {
    hasSwap = false;
    for (j = 0; j < len - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        hasSwap = true;
      }
    }
    if (!hasSwap) break;
  }
  return array;
};

/*
 * Insertion Sort
 *
 * The idea behind insertion sort identify the current hole value and keep on
 * shifting the previous values up until the first (previous) value that is less
 * than the hole value. Once that index is determined, that's the index where
 * the hole value will be placed into.
*/

var insertionSort = function (array) {
  var len = array.length;
  var i, j, hole;

  for (i = 0; i < len; i += 1) {
    hole = array[i];

    j = i;
    while (j > 0 && array[j - 1] > hole) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = hole;
  }

  return array;
};

// Merge Sort


// Quick Sort