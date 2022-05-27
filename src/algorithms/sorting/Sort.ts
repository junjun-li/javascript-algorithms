import Comparator, { IComparator } from '/utils/Comparator';

class Sort {
  comparator: IComparator;

  constructor() {
    this.comparator = new Comparator();
  }
}

export default Sort
