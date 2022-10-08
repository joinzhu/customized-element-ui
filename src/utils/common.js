export const oss_url =
  'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home'

/**
 * @description: try catch
 * @param {function} 需要执行逻辑的函数
 * @param {any} 执行函数的参数
 * @return {array} [错误,数据]
 */
export async function tryCatch() {
  let args = Array.from(arguments)
  let asyncFunc = args.shift()
  try {
    let res = await asyncFunc(...args)
    return [null, res]
  } catch (e) {
    console.log(
      new Error(
        `Code block ${asyncFunc.name}\n${
          e.message || '请求服务失败，服务未响应！'
        }`
      )
    )
    return [e, null]
  }
}

export function isArrayOrUndefined(arr, key) {
  if (!arr || Array.isArray(arr)) return true
  throw new Error(`${key}必须是个数组 或 不传`)
}
