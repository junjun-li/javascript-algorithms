import MergeSort from './MergeSort';
import ArrayGenerator from '/utils/ArrayGenerator';
import SortingHelper, { sortName } from '/utils/SortingHelper';

const dataSize = [100000, 1000000];

dataSize.forEach(item => {
  const arr = ArrayGenerator.generateRandomArray(item);
  SortingHelper.sortText(sortName.MergeSort, arr);
});
// const arr = [ 3, 7, 1, 4, 8, 6, 5, 2 ];
// const mergeSort = new MergeSort();
// const res = mergeSort.sort(arr);
// console.log(res)

