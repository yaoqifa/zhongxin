<template lang="pug">
	view
		view.not-login(v-if="!userInfo.nickName")
			text 您还未登录，登录后这里将出现个人信息管理哦～
			button.login-btn(open-type="getUserInfo" @getuserinfo="getUserInfo" withCredentials="true") 点击登录
		view.personal-wrap(v-else)
			view.top(@click="goToPage('/pages/editInfo/editInfo')")
				image.avatar(:src="userInfo.avatarUrl" mode="cover")
				text.name {{userInfo.nickName}}
				text.edit 编辑资料 >
			view.content
				view.item.dynamics(@click="goToPage('/pages/dynamics/dynamics')")
					text 个人动态
				view.item.coupon(@click="goToPage('/pages/coupon/coupon')")
					text 我的桃花券
				view.item.setting(@click="goToPage('/pages/setting/setting')")
					text 设置
				view.item
					button(@click="clearUserInfo") 清除登陆信息
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		computed: {
      ...mapState(['token'])
    },
		created() {
			console.log('personal')
			console.log(this.token)
			this.userInfo = uni.getStorageSync('userInfo') || {}
		},
		methods: {
			getUserInfo(e) {
				this.userInfo = e.detail.userInfo
				uni.setStorageSync('userInfo', this.userInfo)
			},
			goToPage(url) {
				if (!url) {
					return
				}
				uni.navigateTo({
					url
				})
			},
			clearUserInfo() {
				uni.removeStorageSync('userInfo')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personal-wrap {
		display: flex;
		flex-direction: column;
		.top {
			box-sizing: border-box;
			padding: 20rpx 40rpx;
			height: 160rpx;
			display: flex;
			align-items: center;
			border-bottom: 20rpx solid #eee;
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.name {
				color: #111;
				margin-left: 30rpx;
				flex: 1;
				font-size: 16px;
			}
			.edit {
				flex-basis: 120rpx;
				text-align: right;
				font-size: 12px;
				color: #999;
			}
		}
		.content {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding-left: 40rpx;
			.item {
				box-sizing: border-box;
				height: 100rpx;
				padding: 10rpx;
				font-size: 14px;
				color: #333;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #eee;
			}
		}
	}
</style>
