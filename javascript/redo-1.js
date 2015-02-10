var a = [];
var b = [18];
var c = [100, 23, 10, 8, 1, 0, -1, -5];
var d = [-1, 0, 1, 10, 100];

var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

var selectionSort = function (array) {
  var len = array.length;
  var minIdx, temp, i, j;

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

var bubbleSort = function (array) {
  var len = array.length;
  var i, j, hasSwapped;

  for (i = 0; i < len; i += 1) {
    hasSwapped = false;
    for (j = 0; j < len - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        hasSwapped = true;
      }
    }
    if (!hasSwapped) break;
  }
  return array;
};

var insertionSort = function (array) {
  var len = array.length;
  var i, j, hole;
  if (len < 2) return array;

  for (i = 1; i < len; i += 1) {
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

var mergeSort = function (array) {
  var len = array.length;
  var mid, left, right;

  if (len < 2) return array;

  mid   = Math.floor(len / 2);
  left  = mergeSort( array.slice(0, mid) );
  right = mergeSort( array.slice(mid) );

  return merge( array, left, right );
};

var merge = function (array, left, right) {
  var lLen = left.length;
  var rLen = right.length;
  var aIdx = 0;
  var lIdx = 0;
  var rIdx = 0;

  while (lIdx < lLen && rIdx < rLen) {
    if (left[lIdx] <= right[rIdx]) {
      array[aIdx] = left[lIdx];
      lIdx += 1;
    } else {
      array[aIdx] = right[rIdx];
      rIdx += 1;
    }
    aIdx += 1;
  }

  while (lIdx < lLen) {
    array[aIdx] = left[lIdx];
    aIdx += 1;
    lIdx += 1;
  }

  while (rIdx < rLen) {
    array[aIdx] = right[rIdx];
    aIdx += 1;
    rIdx += 1;
  }

  return array;
};

var quickSort = function (array) {
  if (array.length < 2) return array;

  var pivot = array.splice(0, 1);
  var len   = array.length;
  var left  = [];
  var right = [];
  var i;

  for (i = 0; i < len; i += 1) {
    (array[i] <= pivot[0] ? left : right).push( array[i] );
  }

  return Array.prototype.concat( quickSort(left), pivot, quickSort(right) ); 
};