/**
 * 数组并集,只支持一维数组
 */
export const arrAndSet = <T>(arrOne: T[], arrTwo: T[]): T[] => {
  return arrOne.concat(arrTwo.filter((v: T) => !arrOne.includes(v)));
};

/**
 * 数组交集,只支持一维数组
 */
export const arrIntersection = <T>(arrOne: T[], arrTwo: T[]): T[] => {
  return arrOne.filter((v) => arrTwo.includes(v));
};
