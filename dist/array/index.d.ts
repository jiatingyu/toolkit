/**
 * 数组并集,只支持一维数组
 */
export declare const arrAndSet: <T>(arrOne: T[], arrTwo: T[]) => T[];
/**
 * 数组交集,只支持一维数组
 */
export declare const arrIntersection: <T>(arrOne: T[], arrTwo: T[]) => T[];
/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
 */
export declare const arrDifference: <T>(arrOne: T[], arrTwo: T[]) => T[];
/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 */
