<template lang="pug">
	view
		view.not-login(v-if="!userInfo.nickName")
			text 您还未登录，登录后这里将看到大家最新的动态哦～
			button.login-btn(open-type="getUserInfo" @getuserinfo="getUserInfo" withCredentials="true") 点击登录
		view.square-wrap(v-else)
			text {{title}}
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				title: 'square'
			}
		},
		computed: {
      ...mapState(['userInfo'])
    },
		methods: {
			...mapMutations(['setUserInfo']),
			getUserInfo(e) {
				this.setUserInfo(e.detail.userInfo)
				uni.setStorageSync('userInfo', this.userInfo)
			},
		}
	}
</script>

<style>
	.square-wrap {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
