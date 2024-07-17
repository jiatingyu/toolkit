/**
 *  判断是否只包含数字
 */
export const checkNum = (data: string ) => {
  const reg = /^\d{1,}$/g;
  if (reg.test(data)) return true;
};
