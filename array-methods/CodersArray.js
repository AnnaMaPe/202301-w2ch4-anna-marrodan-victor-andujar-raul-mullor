class CodersArray {
  length = 0;
  constructor(...items) {
    let index = 0;
    for (const item of items) {
      this[index] = item;
      index++;
      this.length++;
    }
  }
}

export default CodersArray;
