const mergeSort = require('./mergeSort');
main();

function main() {
  let a = [9, 2, 3, 7, 6, 1, 8];
  mergeSort(a, 0, a.length - 1);
  console.log(a);
}