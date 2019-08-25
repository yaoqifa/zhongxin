<template>
  <div class="index page-ontainer" @click="clickHandle">
    <div class="list">
      <card v-for="item in list" :info="item" :key="item.id"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { hasLogin } from '@/utils/index'

export default {
  components: {
    card
  },
  data () {
    return {
      list: [
        {
          id: 10001,
          name: 'Carol',
          certifyStatus: false,
          introLength: 30,
          sex: 'male',
          address: '上海',
          age: '93年',
          school: '上海大学',
          url: '/static/img/qa.png'
        },
        {
          id: 10002,
          name: '我的名字',
          certifyStatus: false,
          introLength: 120,
          sex: 'female',
          address: '上海',
          age: '93年',
          school: '上海大学',
          url: '/static/img/release.png'
        }
      ]
    }
  },
  onShow() {
    if (!hasLogin()) {
			uni.showModal({
				title: '提示',
				content: '微信授权登陆为微信官方提供，不会对您的隐私信息进行记录哒～ 授权之后就能认识更多优质小哥哥小姐姐啦',
				cancelText: '取消',
				confirmText: '去授权',
				success: (res) => {
					if (res.confirm) {
						uni.switchTab({
							url: '/pages/tabbar/personal/personal'
						})
					}
				}
			})
    }
  },

  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    onPullDownRefresh () {
      console.log(1)
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.page-ontainer {
  background: #eee;
  min-height: 100%;
  overflow: scroll;
}

</style>
