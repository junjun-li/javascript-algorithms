"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayGenerator {
    static generateOrderedArray(n) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i);
        }
        return arr;
    }
    static generateRandomArray(n) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * n));
        }
        return arr;
    }
}
exports.default = ArrayGenerator;
