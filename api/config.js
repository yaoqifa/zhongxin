import { hasLogin, hasGuid } from '@/utils/index'

const baseRequest = ({ url = '', data = '', header, method = 'GET', successFn, failFn}) => {
	if (!url) {
		return
  }
  if (!hasGuid()) {
    uni.navigateTo({
      url: '/pages/editInfo/editInfo'
    })
    return
  }

	uni.request({
		url,
		data,
		method: method.toUpperCase(),
		header,
		success: successFn,
		fail: failFn
	})
}

export default baseRequest