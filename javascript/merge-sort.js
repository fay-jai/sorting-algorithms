var empty   = [];
var one     = [1];
var inorder = [-5, -1, 0, 4, 9];
var reverse = [10, 8, 5, 3, -1, -7];
var random  = [-1, 6, 10, 2, -6, -1, 0, -3, 8, 9, 6, 10];

var mergeSort = function (array) {
  var len = array.length;
  var mid, left, right;

  // base case
  if (len < 2) return array;

  // recursive case
  mid   = Math.floor(len / 2);
  left  = mergeSort( array.slice(0, mid) );
  right = mergeSort( array.slice(mid) );

  return merge(left, right);
};

var merge = function (left, right) {
  var result   = [];

  while (left.length > 0 && right.length > 0) {
    result.push( left[0] <= right[0] ? left.shift() : right.shift() );
  }

  while (left.length > 0) {
    result.push( left.shift() );
  }

  while (right.length > 0) {
    result.push( right.shift() );
  }

  return result;
};