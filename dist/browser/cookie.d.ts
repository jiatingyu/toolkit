/**
 *  设置 Cookie
 * @param name
 * @param value
 * @param days 有效期天数
 */
export declare function setCookie(name: any, value: any, days: any): void;
export declare function getCookie(name: any): string | null;
export declare function removeCookie(name: any): void;
export declare function hasCookie(name: any): boolean;
export declare function getAllCookies(): {};
