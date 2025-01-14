/**
 *  判断是否只包含数字
 */
export declare const validateOnlyNum: (data: string) => true | undefined;
export declare function validateEmail(email: string): boolean;
export declare function validatePhone(phone: string): boolean;
export declare function validatePassword(password: string): boolean;
export declare function validateIdCard(idCard: string): boolean;
export declare function validateUrl(url: string): boolean;
export declare function extractNumbers(str: string): RegExpMatchArray | null;
export declare function replaceSensitiveWords(text: string, sensitiveWords: string[]): string;
export declare function matchDate(str: string): RegExpMatchArray | null;
