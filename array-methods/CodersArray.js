class CodersArray {
  constructor(...items) {
    let index = 0;
    for (const item of items) {
      this[index] = item;
      index++;
    }
  }
}

export default CodersArray;
