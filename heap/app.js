const MaxHeap = require("./MaxHeap");
main();

function main() {
  let heap = new MaxHeap();
  init(heap);
  while (heap.size() > 0) {
    console.log(heap.extractMax());
  }
}
function init(heap) {
  heap.add(10);
  heap.add(22);
  heap.add(5);
  heap.add(75);
  heap.add(65);
  heap.add(80);
}
