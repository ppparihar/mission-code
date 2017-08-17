function Queue() {
  let list = [];
  this.length = ()=>{
    return list.length;
  }
  this.enqueue = item => {
    list.push(item);
  };
  this.dequeue = () => {
    if (list.length <= 0) {
      return null;
    }
    let item = list[0];
    list.splice(0, 1);
    return item;
  };
}

module.exports = Queue;
