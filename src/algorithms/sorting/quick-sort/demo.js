// partition
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/**
 * [4, 6, 5, 2, 3, 8, 7, 1]
 * 接收一个随机的数字数组
 * @param arr
 */
function partition(arr) {
  let l = 0;
  let r = arr.length - 1;
  /**
   * 中间值
   * arr[l+1...j] < v
   * arr[j+1...i] > v
   */
  let j = 0;
  const cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (cur > arr[i]) {
      j++;
      swap(arr, i, j);
    }
  }
  swap(arr, l, j);
  console.log(j);
}

const arr = [4, 6, 5, 2, 3, 8, 7, 1];
partition(arr);
console.log(arr);
