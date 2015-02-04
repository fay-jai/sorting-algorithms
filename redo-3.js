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

/*
 * Merge Sort
 *
 * The idea behind merge sort is to continue reducing the original array into
 * two smaller arrays (where splitting occurs at the middle index). Once the
 * smaller arrays are reduced to the base case, then a merge operation happens
 * between the smaller arrays to form back the larger array.
*/

var mergeSort = function (array) {
  var len = array.length;
  var mid, left, right;
  // base case
  if (len < 2) return array;

  mid   = Math.floor( len / 2 );
  left  = mergeSort( array.slice(0, mid) );
  right = mergeSort( array.slice(mid) );

  return merge(array, left, right);
};

var merge = function (array, left, right) {
  var leftLen  = left.length;
  var rightLen = right.length;
  var i = 0; // array
  var j = 0; // left
  var k = 0; // right

  while (j < leftLen && k < rightLen) {
    if (left[j] <= right[k]) {
      array[i] = left[j];
      j += 1;
    } else {
      array[i] = right[k];
      k += 1;
    }
    i += 1;
  }

  while (j < leftLen) {
    array[i] = left[j];
    i += 1;
    j += 1;
  }

  while (k < rightLen) {
    array[i] = right[k];
    i += 1;
    k += 1;
  }

  return array;
};

/*
 * Quick Sort
 *
 * The idea behind quick sort is to select a pivot (first item in array) and
 * create left and right arrays which contain values <= and > the pivot (respectively).
 * The algorithm continues by recursively quick sorting the left and right arrays
 * and then concatenating the 3 arrays in correct order.
*/

var quickSort = function (array) {
  var len, pivot, left, right, i;
  // base case
  if (array.length < 2) return array;

  pivot = array.splice(0, 1);
  len   = array.length;
  left  = [];
  right = [];

  for (i = 0; i < len; i += 1) {
    (array[i] <= pivot[0] ? left : right).push( array[i] );
  }

  left  = quickSort( left );
  right = quickSort( right );
  return Array.prototype.concat(left, pivot, right);
};
