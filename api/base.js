import { hasLogin, hasGuid } from '@/utils/index'
import isEmpty from '@/utils/isEmpty';
import config from './api.config.js';

export default new class {
	getTotalUrl(url) {
		if (/^http(s)?:\/\//.test(url)) {
		  return url;
		}

    return `${config.API_HOST}${url}`;
	}

  // 过滤无意义的值
  paramsFilter(params) {
    const newParams = { ...params };
    Object.keys(newParams).forEach((p) => {
      if (isEmpty(newParams[p])) {
        delete newParams[p];
      }
    });
    return newParams;
  }

  base(method, url, data, config = { timeout: 5000, isFilter = true }) {
    if (!hasGuid()) {
      uni.navigateTo({
        url: '/pages/editInfo/editInfo'
      })
      return;
    }
    const newConfig = Object.assign({
      method,
      data: config.isFilter ? this.paramsFilter(data) : data,
      url: this.getTotalUrl(url),
      dataType: 'json',
      headers: {},
    }, config);

    return uni.request({
      ...newConfig
    }).then((res) => {
      if (res.data.status < 1) {
        uni.showToast({
          title: res.data.info,
          icon: 'none'
        });
        throw new Error(res.data.info || '网络开小差');
      }
      return res.data;
    }).catch((e) => {
      uni.showToast({
        title: e.info,
        icon: 'none'
      })
    });
  }

  get(url, data = {}, config) {
    return this.base('get', url, data, config);
  }

  post(url, data = {}, config) {
    return this.base('post', url, data, config);
  }
}();
