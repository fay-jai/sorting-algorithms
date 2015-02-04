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
  var i, j, minIdx;

  for (i = 0; i < len; i += 1) {
    minIdx = i;
    for (j = i + 1; j < len; j += 1) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    swap( array, i, minIdx );
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
        swap( array, j, j + 1 );
        hasSwapped = true;
      }
    }
    if (!hasSwapped) { break; }
  }

  return array;
};

var insertionSort = function (array) {
  var len = array.length;
  var i, j, hole;

  if (len < 2) { return array; }

  for (i = 1; i < len; i += 1) {
    hole = array[i];
    j    = i;

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
  if (len < 2) { return array; }

  var mid   = Math.floor( len / 2 );
  var left  = mergeSort( array.slice(0, mid) );
  var right = mergeSort( array.slice(mid) );

  return merge(array, left, right);
};

var merge = function (array, left, right) {
  var leftLen  = left.length;
  var rightLen = right.length;
  var i = 0;
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

var quickSort = function (array) {
  if (array.length < 2) { return array; }

  var first = array.splice(0, 1);
  var left  = [];
  var right = [];
  var len   = array.length;

  for (var i = 0; i < len; i += 1) {
    (array[i] <= first ? left : right).push( array[i] );
  }

  left  = quickSort(left);
  right = quickSort(right);

  return Array.prototype.concat.call( left, first, right );
};