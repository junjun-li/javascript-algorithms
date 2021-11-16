type TCompareN = (a: string | number, b: string | number) => number;
type TCompareB = (a: string | number, b: string | number) => boolean;

// TODO: 接口怎么实现 static 成员的方法呢???
export interface IComparator {
  compare: TCompareN;
  defaultCompareFunction: TCompareN;
  equal: (a: string | number, b: string | number) => boolean;
  lessThan: (a: string | number, b: string | number) => boolean;
  lessThanOrEqual: (a: string | number, b: string | number) => boolean;
}

class comparator implements IComparator {
  compare: TCompareN;

  constructor(compareFunction?: TCompareN) {
    this.compare = compareFunction || this.defaultCompareFunction;
  }

  /**
   * 默认比较函数
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  defaultCompareFunction: TCompareN = (a, b) => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  };

  /**
   * 检查两个变量是否相等
   */
  equal: TCompareB = (a, b) => {
    return this.compare(a, b) === 0;
  };

  /**
   * 检查变量“a”是否小于“b”。
   */
  lessThan: TCompareB = (a, b) => {
    return this.compare(a, b) < 0;
  };

  /**
   * 检查变量“a”是否大于“b”。
   */
  greaterThan: TCompareB = (a,b) => {
    return this.compare(a, b) > 0;
  }

  /**
   * 检查变量“a”是否小于或等于“b”。
   */
  lessThanOrEqual: TCompareB = (a, b) => {
    return this.lessThan(a, b) || this.equal(a, b);
  };

}

export default comparator;
