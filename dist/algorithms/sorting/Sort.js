"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = __importDefault(require("/utils/Comparator"));
class Sort {
    constructor() {
        this.comparator = new Comparator_1.default();
    }
}
exports.default = Sort;
