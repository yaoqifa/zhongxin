export const hasLogin = () => {
  const userInfo = uni.getStorageSync('userInfo') || {}
  return userInfo.nickName
}

export const hasGuid = () => {
  const guid = uni.getStorageSync('guid') || ''
  return guid.length > 0
}
