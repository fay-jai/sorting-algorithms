var empty   = [];
var one     = [1];
var inorder = [-5, -1, 0, 4, 9];
var reverse = [10, 8, 5, 3, -1, -7];
var random  = [-1, 6, 10, 2, -6, -1, 0, -3, 8, 9, 6, 10];

var quickSort = function (array) {
  if (array.length < 2) return array;

  var pivot = array.splice(0, 1);
  var left  = [];
  var right = [];

  array.forEach(function (value) {
    (value <= pivot[0] ? left : right).push(value);
  });

  return Array.prototype.concat(quickSort(left), pivot, quickSort(right));
};