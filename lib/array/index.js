"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrIntersection = exports.arrAndSet = void 0;
/**
 * 数组并集,只支持一维数组
 */
const arrAndSet = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter((v) => !arrOne.includes(v)));
};
exports.arrAndSet = arrAndSet;
/**
 * 数组交集,只支持一维数组
 */
const arrIntersection = (arrOne, arrTwo) => {
    return arrOne.filter((v) => arrTwo.includes(v));
};
exports.arrIntersection = arrIntersection;
