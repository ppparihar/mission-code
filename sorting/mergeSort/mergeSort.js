

function mergeSort(a, l, r) {
  if (l - r === 0) return;

  let mid = Math.floor((l + r) / 2);
  mergeSort(a, l, mid);
  mergeSort(a, mid + 1, r);
  merge(a, l, mid, r);
}

function merge(a, l, i, r) {
  let a1 = [];
  let a2 = [];
  for (let x = l; x <= i; x++) {
    a1.push(a[x]);
  }
  for (let y = i + 1; y <= r; y++) {
    a2.push(a[y]);
  }

  let p = 0,
    q = 0;
  let index = l;

  while (p < a1.length && q < a2.length) {
    if (a1[p] <= a2[q]) {
      a[index] = a1[p];
      p++;
    } else {
      a[index] = a2[q];
      q++;
    }
    index++;
  }
  while (p < a1.length) {
    a[index] = a1[p];
    p++;
    index++;
  }
  while (q < a2.length) {
    a[index] = a2[q];
    q++;
    index++;
  }
}

module.exports = mergeSort;
