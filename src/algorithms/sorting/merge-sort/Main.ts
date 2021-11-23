import MergeSort from './MergeSort';
import ArrayGenerator from '../../../utils/ArrayGenerator';
import SortingHelper, { sortName } from '../../../utils/SortingHelper';

const dataSize = [100000, 1000000, 10000000];

dataSize.forEach(item => {
  const arr = ArrayGenerator.generateRandomArray(item);
  SortingHelper.sortText(sortName.MergeSort, arr);
});

