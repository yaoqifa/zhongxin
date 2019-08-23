<template lang="pug">
	view.content
		view.top(v-if="userInfo.avatarUrl" @click="goToPage")
			image.avatar(:src="userInfo.avatarUrl" mode="cover")
			text.name {{userInfo.nickName}}
			text.edit 编辑资料
		view.top(v-else	@click="getUserInfo")
			image.avatar(src="/static/logo.png")
			text.name 点我登录
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				userInfo: {}
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageInfoSync('userInfo') || {}
		},
		created() {
		},
		methods: {
			getUserInfo() {
				uni.getUserInfo({
					success: (res) => {
						this.userInfo = res.userInfo
						uni.setStorageSync('userInfo', this.userInfo)
					}
				})
			},
			goToPage() {
				uni.navigateTo({
					url: '/pages/editInfo/editInfo'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		.top {
			box-sizing: border-box;
			padding: 20rpx 40rpx;
			height: 160rpx;
			display: flex;
			align-items: center;
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.name {
				margin-left: 30rpx;
				flex: 1;
				font-size: 16px;
			}
			.edit {
				flex-basis: 100rpx;
				text-align: right;
				font-size: 12px;
				color: #999;
			}
		}
	}
</style>
