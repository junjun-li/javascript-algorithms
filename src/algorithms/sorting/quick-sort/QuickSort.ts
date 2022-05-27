class QuickSort {
  public static Sort(arr: number[], l: number = 0, r: number = arr.length - 1) {
    if (l >= r) return;
    const p = this.partition(arr, l, r);
    this.Sort(arr, l, p - 1);
    this.Sort(arr, p + 1, r);
  }

  private static partition(arr: number[], l: number, r: number): number {
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (arr[l] > arr[i]) {
        j++;
        this.swap(arr, i, j);
      }
    }
    // 优化点
    if (l === j) return j;
    this.swap(arr, l, j);
    return j;
  }

  private static swap(arr: number[], i: number, j: number) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}

const arr1 = [ 4, 6, 5, 2, 3, 8, 7, 1 ];
const arr2 = [ 4, 6, 5, 2, 3, 8, 7, 1 ];
const arr3 = [ 7, 2, 3, 4, 8, 6, 5, 1 ];
const arr4 = [ 6, 7, 1, 5, 3, 8, 2, 4 ];
QuickSort.Sort(arr1);
debugger
QuickSort.Sort(arr2);
QuickSort.Sort(arr3);
QuickSort.Sort(arr4);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
