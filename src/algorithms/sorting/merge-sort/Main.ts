import MergeSort from './MergeSort';
import ArrayGenerator from '../../../utils/arrayGenerator';
import SortingHelper, { sortName } from '../../../utils/sortingHelper';

const dataSize = [100000, 1000000, 10000000];

dataSize.forEach(item => {
  const arr = ArrayGenerator.generateRandomArray(item);
  SortingHelper.sortText(sortName.MergeSort, arr);
});

