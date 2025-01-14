import CryptoJS from 'crypto-js';
/** 通过传入，key, 和 偏移量 */
export declare function createCrypto(_key?: string, _iv?: string): {
    encrypt: (data: string) => string;
    decrypt: (data: string) => string;
};
export default CryptoJS;
