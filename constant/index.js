import { setArrayRange } from '@/utils/tool'

const constellationRange = [
  {
    range: ['03-21', '04-19'],
    name: '白羊座'
  },
  {
    range: ['04-20', '05-20'],
    name: '金牛座'
  },
  {
    range: ['05-21', '06-21'],
    name: '双子座'
  },
  {
    range: ['06-22', '07-22'],
    name: '巨蟹座'
  },
  {
    range: ['07-23', '08-22'],
    name: '狮子座'
  },
  {
    range: ['08-23', '09-22'],
    name: '处女座'
  },
  {
    range: ['09-23', '10-23'],
    name: '天秤座'
  },
  {
    range: ['10-24', '11-22'],
    name: '天蝎座'
  },
  {
    range: ['11-23', '12-21'],
    name: '射手座'
  },
  {
    range: ['12-22', '01-19'],
    name: '摩羯座'
  },
  {
    range: ['01-20', '02-18'],
    name: '水瓶座'
  },
  {
    range: ['02-19', '03-20'],
    name: '双鱼座'
  }
]

const	educationRange = ['高中及以下', '大专', '本科', '硕士', '博士']

const heightRange = setArrayRange(100, 230)

export {
  constellationRange,
  educationRange,
  heightRange
}
