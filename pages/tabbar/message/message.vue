<template lang="pug">
	view
		view.not-login(v-if="!userInfo.nickName")
			text 您还未登录，登录后这里将出现消息管理功能哦～
			button.login-btn(open-type="getUserInfo" @getuserinfo="getUserInfo" withCredentials="true") 点击登录
		view.message-wrap(v-else)
			text {{title}}
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				title: 'message'
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
	.message-wrap {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
