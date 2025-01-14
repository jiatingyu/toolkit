// 网络请求相关

interface IResponseType {
  data?: any
  code: number
  state: boolean
  msg?: string
}

export const sendRequest = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data: any,
  token?: { [key in string]: any },
): Promise<IResponseType> => {
  return new Promise((resolve, reject) => {
    let xmlhttp

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    // 设置请求头
    xmlhttp.setRequestHeader('Content-Type', 'application/json')
    if (token) {
      Object.keys(token).forEach((key) => {
        xmlhttp.setRequestHeader(key, token[key]) // 假设需要认证
      })
    }

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          const data = JSON.parse(xmlhttp.responseText)
          resolve({
            code: 200,
            state: true,
            data,
          })
        } else if (xmlhttp.status == 400) {
          reject({ state: false, msg: '非法请求' })
        } else {
          reject({ state: false, msg: '服务器内部错误' })
        }
      }
    }

    xmlhttp.open(method, url, true)

    const strData = JSON.stringify(data)
    xmlhttp.send(strData)
  })
}

// const sendJSONP = (url: string, callbackName: any, callback: Function) => {
//   const script = document.createElement("script");
//   // 设置script元素的src属性，拼接callback参数
//   script.src = `${url}?callback=${callbackName}`;
//   // 将script元素添加到页面中
//   document.body.appendChild(script);
//   // 定义全局的回调函数，用于接收JSONP响应
//   window[callbackName] = (data: any) => {
//     // 执行传入的回调函数，并将JSONP响应作为参数传递
//     callback(data);
//     // 执行完毕后移除script元素
//     document.body.removeChild(script);
//     // 删除全局的回调函数
//     delete window[callbackName];
//   };
// };

/**
 * 发送JSONP请求
 * @param {string} url - 请求的URL
 * @param {Object} params - 请求的参数对象
 * @param {string} callbackName - 回调函数的名称
 * @returns {Promise} - 返回一个Promise，解析请求结果
 */
export function sendJSONPRequest(
  url: string,
  params = {},
  callbackName = 'callback',
) {
  return new Promise((resolve, reject) => {
    // 创建回调函数名称
    const callbackFunctionName = `jsonpCallback_${Date.now()}`

    // 创建URL查询参数字符串
    const queryParams = new URLSearchParams(params)
    queryParams.set(callbackName, callbackFunctionName)

    // 创建script元素
    const script = document.createElement('script')
    script.src = `${url}?${queryParams.toString()}`
    script.async = true
    window.aa = ''
    // 定义回调函数
    window[callbackFunctionName] = (data: any) => {
      resolve(data)
      cleanup()
    }

    // 错误处理
    script.onerror = () => {
      reject(new Error('JSONP request failed'))
      cleanup()
    }

    // 清理函数
    function cleanup() {
      delete window[callbackFunctionName]
      document.body.removeChild(script)
    }

    // 将script元素添加到文档中
    document.body.appendChild(script)
  })
}


/**
 * 文件下载
 * @param {*} data
 * @param {*} filename
 * @param {*} mime
 * @param {*} bom
 */
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })

  const blobURL = window.URL.createObjectURL(blob)
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', filename)
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(blobURL)
}