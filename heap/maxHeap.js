function MaxHeap() {
  let heap = [];
  heap.push(null);
  this.add = item => {
    heap.push(item);
    childParentHeapify(this.size());
  };
  this.extractMax = () => {
    let length = this.size();
    if (length <= 0) return null;

    let item = heap[1];
    heap[1] = heap[length];
    heap.splice(length, 1);
    if (length > 1) {
      maxHeapify(1);
    }

    return item;
  };
  this.size = () => {
    return heap.length - 1;
  };

  function childParentHeapify(index) {
    if (index === 1) return;

    let parent = Math.floor(index / 2);
    if (heap[parent] < heap[index]) {
      let temp = heap[parent];
      heap[parent] = heap[index];
      heap[index] = temp;
      childParentHeapify(parent);
    }
  }
  function maxHeapify(index) {
    let left = 2 * index;
    let right = left + 1;
    let largest = index;

    if (left <= heap.length && heap[left] > heap[largest]) {
      largest = left;
    } else if (right <= heap.length && heap[right] > heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      let temp = heap[largest];
      heap[largest] = heap[index];
      heap[index] = temp;
      maxHeapify(largest);
    }
  }
}

module.exports = MaxHeap;
