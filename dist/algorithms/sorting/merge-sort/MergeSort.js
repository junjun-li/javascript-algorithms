"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = __importDefault(require("../Sort"));
class MergeSort extends Sort_1.default {
    sort(originalArray) {
        // 如果这个数组是空的或者只有一个元素,则返回此数组,因为已经排好序了
        if (originalArray.length <= 1) {
            return originalArray;
        }
        // 将数组分割
        const middleIndex = Math.floor(originalArray.length / 2);
        const leftArray = originalArray.slice(0, middleIndex);
        const rightArray = originalArray.slice(middleIndex, originalArray.length);
        // 将切割好的数组进行排序
        const leftSortedArray = this.sort(leftArray);
        const rightSortedArray = this.sort(rightArray);
        // 将两个已排序的数组合并成数组
        if (leftSortedArray.length === 1 && rightSortedArray.length === 1 && leftSortedArray[0] < rightSortedArray[0]) {
            return [].concat(leftSortedArray).concat(rightSortedArray);
        }
        return this.merge(leftSortedArray, rightSortedArray);
    }
    merge(leftArray, rightArray) {
        const sortedArray = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            let minElement = null;
            // 检查变量“a”是否小于或等于“b”。
            if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
                minElement = leftArray[leftIndex];
                leftIndex += 1;
            }
            else {
                minElement = rightArray[rightIndex];
                rightIndex += 1;
            }
            sortedArray.push(minElement);
        }
        // 关键
        return sortedArray
            .concat(leftArray.slice(leftIndex))
            .concat(rightArray.slice(rightIndex));
    }
}
exports.default = MergeSort;
