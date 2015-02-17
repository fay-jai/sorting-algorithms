var empty   = [];
var one     = [1];
var inorder = [-5, -1, 0, 4, 9];
var reverse = [10, 8, 5, 3, -1, -7];
var random  = [-1, 6, 10, 2, -6, -1, 0, -3, 8, 9, 6, 10];

var selectionSort = function (array) {
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