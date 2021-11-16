import comparator from './comparator';
import dayjs from 'dayjs';
import MergeSort from '../algorithms/sorting/merge-sort/MergeSort';

export enum sortName {
  MergeSort = 'MergeSort'
}

class SortingHelper {
  private static comparator: comparator = new comparator();

  /**
   * 判断这个数组是不是有序的
   */
  public static isSorted(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      if (this.comparator.greaterThan(arr[i - 1], arr[i])) {
        return false;
      }
    }
    return true;
  }

  /**
   * 测试函数的性能
   */
  public static sortText(sortName: sortName, arr: number[]) {
    const startTime = new Date().getTime();
    let res: number[] = []
    if (sortName === 'MergeSort') {
      const mergeSort = new MergeSort();
      res = mergeSort.sort(arr);
    }
    const endTime = new Date().getTime();
    const time = endTime - startTime;
    if (!SortingHelper.isSorted(res)) {
      throw new Error(`${sortName} failed.`)
    }
    console.log(`${sortName}: n = ${arr.length}, time = ${time/1000}秒`);
  }
}

export default SortingHelper;
