/**
 *  设置返回一个数组区间，比如 setArrayRange(1,4)返回['1','2','3','4'],
 *  setArrayRange(1990,1993, '年')返回['1990年','1991年','1992年','1993年']
 * @param {*} start 数字开始
 * @param {*} end  数字结尾
 * @param {*} unit 单位
 */
export const setArrayRange = (start, end, unit) => {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i + (unit || ''))
  }
  return arr
}
