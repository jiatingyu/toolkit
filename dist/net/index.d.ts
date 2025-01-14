interface IResponseType {
    data?: any;
    code: number;
    state: boolean;
    msg?: string;
}
export declare const sendRequest: (url: string, method: "GET" | "POST" | "PUT" | "DELETE", data: any, token?: { [key in string]: any; }) => Promise<IResponseType>;
/**
 * 发送JSONP请求
 * @param {string} url - 请求的URL
 * @param {Object} params - 请求的参数对象
 * @param {string} callbackName - 回调函数的名称
 * @returns {Promise} - 返回一个Promise，解析请求结果
 */
export declare function sendJSONPRequest(url: string, params?: {}, callbackName?: string): Promise<unknown>;
/**
 * 文件下载
 * @param {*} data
 * @param {*} filename
 * @param {*} mime
 * @param {*} bom
 */
export declare function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart): void;
export {};
