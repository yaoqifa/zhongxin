/**
 *  设置日期
 * @param {*} type 日期年的范围
 */
export const setDate = (type) => {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (type === 'start') {
      year = year - 60
  } else if (type === 'end') {
      year = year - 18
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  return `${year}-${month}-${day}`
}