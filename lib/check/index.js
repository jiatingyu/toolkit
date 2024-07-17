"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNum = void 0;
/**
 *  判断是否只包含数字
 */
const checkNum = (data) => {
    const reg = /^\d{1,}$/g;
    if (reg.test(data))
        return true;
};
exports.checkNum = checkNum;
