(function (global) {
  var _sa = {};

  // Testing
  // var a = [];
  // var b = [18];
  // var c = [100, 23, 10, 8, 1, 0, -1, -5];
  // var d = [-1, 0, 1, 10, 100];

  _sa.selectionSort = function (array) {
    /*
     * The main idea behind selection sort is that you want to maintain
     * a subset array which is sorted and the remaining subset array which
     * is unsorted.
     *
     * The process to move an element from the unsorted subset to the sorted
     * subset is to find the index of the min value within the remaining
     * subset of unsorted array elements and swap that value into the sorted
     * array.
     *
     * This algorithm is O(n^2) because there is an inner loop to determine
     * the min value within the remaining unsorted subset and an outer loop
     * to continue finding this min value until all array elements are sorted.
    */

    var length = array.length;
    var i, j, minIdx, temp;

    if (length < 2) { return array; }

    for (i = 0; i < length - 1; i += 1) {
      minIdx = i;

      // it's important to start the inner index 1 spot higher than the outer index
      // because that's how you can maintain the unsorted and sorted array subsets
      for (j = i + 1; j < length; j += 1) {
        if ( array[j] < array[minIdx] ) {
          minIdx = j;
        }
      }

      // by the time the inner loop ends, array[minIdx] will contain the
      // current iterations min value

      // swap
      temp          = array[i];
      array[i]      = array[minIdx];
      array[minIdx] = temp;
    }

    return array;
  };

  _sa.bubbleSort = function (array) {

  };

  _sa.insertionSort = function (array) {

  };

  _sa.mergeSort = function (array) {

  };

  _sa.quickSort = function (array) {

  };

  global._sa = _sa;
})(window);