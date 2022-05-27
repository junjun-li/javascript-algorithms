"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayGenerator_1 = __importDefault(require("/utils/ArrayGenerator"));
const SortingHelper_1 = __importStar(require("/utils/SortingHelper"));
const dataSize = [100000, 1000000];
dataSize.forEach(item => {
    const arr = ArrayGenerator_1.default.generateRandomArray(item);
    SortingHelper_1.default.sortText(SortingHelper_1.sortName.MergeSort, arr);
});
// const arr = [ 3, 7, 1, 4, 8, 6, 5, 2 ];
// const mergeSort = new MergeSort();
// const res = mergeSort.sort(arr);
// console.log(res)
