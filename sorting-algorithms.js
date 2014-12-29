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
    /*
     * The main idea behind bubble sort is having an inner loop which compares the value
     * at the current and current + 1 indices, and if the current index is the larger value,
     * then swapping the values. Once completing a full iteration of the inner loop, the
     * max value in the array will have 'bubbled' up to the last index in the array.
     * Therefore, the goal of the outer loop is to perform enough inner loops to bubble up
     * each iteration's max value to the end of the array.
     *
     * This algorithm is O(n^2) because there is an inner loop within an outer loop.
    */

    var length = array.length;
    var i, j, temp, noSwap;

    for (i = 0; i < length; i += 1) {
      noSwap = true;
      for (j = 0; j < length - i - 1; j += 1) {
      // the reason the terminating condition includes a (minus i) is because
      // you don't need to check as many elements after each iteration since
      // the max value gets bubbled up each time

        if (array[j] > array[j + 1]) {
          // swap
          temp         = array[j];
          array[j]     = array[j + 1];
          array[j + 1] = temp;
          noSwap       = false;
        }
      }
      // noSwap is an optimization that improves the algorithm by breaking out of
      // outer loop once a full iteration of the inner loop doesn't produce a swap
      if (noSwap) { break; }
    }

    return array;
  };

  _sa.insertionSort = function (array) {
    /*
     * The main idea behind insertion sort is similar to selection sort in that
     * you want to maintain to subsets of your original array: sorted and unsorted
     * subsets.
     *
     * The mechanism to maintain these separate partitions is different
     * though. With insertion sort, you have an inner loop which, given the first
     * element in the unsorted subset, attempts to find the position in the sorted
     * subset the element belongs in. In the process, the inner loop will shift up
     * the elements in the sorted subset one by one until it finds the position to
     * 'insert' the unsorted element. The purpose of the outer loop is to iterate
     * through all the remaining elements in the unsorted subset.
     *
     * This algorithm is O(n^2) although its time complexity is slightly better than
     * both selection and bubble sort.
    */

    var length = array.length;
    var i, j, temp;

    for (i = 1; i < length; i += 1) {
      j    = i;
      temp = array[i];

      while (j > 0 && array[j - 1] > temp) {
        // as long as the while condition passes, the goal is to continue shifting
        // the sorted elements up until we find the position to insert the
        // unsorted element
        array[j] = array[j - 1];
        j -= 1;
      }

      // by the time the inner loop breaks, the jth position will be where the
      // unsorted element should be inserted
      array[j] = temp;
    }

    return array;
  };

  _sa.mergeSort = function (array) {

  };

  _sa.quickSort = function (array) {

  };

  global._sa = _sa;
})(window);