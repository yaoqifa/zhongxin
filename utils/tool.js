export const setArrayRange = (start, end, unit) => {
  let arr = []
  for (let i = start; i < end; i++) {
    arr.push(i + (unit || ''))
  }
  return arr
}
