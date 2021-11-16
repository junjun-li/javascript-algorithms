class ArrayGenerator {
  public static generateOrderedArray(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

  public static generateRandomArray(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * n));
    }
    return arr;
  }
}

export default ArrayGenerator;
