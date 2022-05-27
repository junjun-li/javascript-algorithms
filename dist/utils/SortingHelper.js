"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortName = void 0;
const Comparator_1 = __importDefault(require("./Comparator"));
const MergeSort_1 = __importDefault(require("/algorithms/sorting/merge-sort/MergeSort"));
var sortName;
(function (sortName) {
    sortName["MergeSort"] = "MergeSort";
})(sortName = exports.sortName || (exports.sortName = {}));
class SortingHelper {
    /**
     * 判断这个数组是不是有序的
     */
    static isSorted(arr) {
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
    static sortText(sortName, arr) {
        const startTime = new Date().getTime();
        let res = [];
        if (sortName === 'MergeSort') {
            const mergeSort = new MergeSort_1.default();
            res = mergeSort.sort(arr);
        }
        const endTime = new Date().getTime();
        const time = endTime - startTime;
        if (!SortingHelper.isSorted(res)) {
            throw new Error(`${sortName} failed.`);
        }
        console.log(`${sortName}: n = ${arr.length}, time = ${time / 1000}秒`);
    }
}
SortingHelper.comparator = new Comparator_1.default();
exports.default = SortingHelper;
