function quickSort(a, l, r) {
  if (l >= r) return;

  let index = partition(a, l, r);
  quickSort(a, l, index - 1);
  quickSort(a, index + 1, r);
}
function partition(a, l, r) {
  let i = l - 1;

  for (let j = l; j <= r; j++) {
    if (a[j] <= a[r]) {
      i++;
      let temp = a[j];
      a[j] = a[i];
      a[i] = temp;
    }
  }
  return i;
}

module.exports = quickSort;