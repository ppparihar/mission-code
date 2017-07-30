function Map() {
  let records = {};
  this.add = (key, data) => {
    records[key] = data;
  };
  this.remove = key => {
    delete records[key];
  };
  this.get = key => {
    return records[key];
  };
}

module.exports = Map;
