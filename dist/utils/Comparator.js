"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class comparator {
    constructor(compareFunction) {
        /**
         * 默认比较函数
         * @param {(string|number)} a
         * @param {(string|number)} b
         * @returns {number}
         */
        this.defaultCompareFunction = (a, b) => {
            if (a === b) {
                return 0;
            }
            return a > b ? 1 : -1;
        };
        /**
         * 检查两个变量是否相等
         */
        this.equal = (a, b) => {
            return this.compare(a, b) === 0;
        };
        /**
         * 检查变量“a”是否小于“b”。
         */
        this.lessThan = (a, b) => {
            return this.compare(a, b) < 0;
        };
        /**
         * 检查变量“a”是否大于“b”。
         */
        this.greaterThan = (a, b) => {
            return this.compare(a, b) > 0;
        };
        /**
         * 检查变量“a”是否小于或等于“b”。
         */
        this.lessThanOrEqual = (a, b) => {
            return this.lessThan(a, b) || this.equal(a, b);
        };
        this.compare = compareFunction || this.defaultCompareFunction;
    }
}
exports.default = comparator;
