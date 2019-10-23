<template lang="pug">
	view.edit-info
		view.photos
			view.title
				text.main-t 相册
				text.small-t (*请您至少上传一张真人照片哦～)
			view.photo-wrap
				view.pw-left
					image(v-if="photos[0]" :src="photos[0]" mode="cover")
					button.photo-btn(v-else @click="addPhoto(0)") +
				view.pw-right
					view.pwr-top
						image(v-if="photos[1]" :src="photos[1]" mode="cover")
						button.photo-btn(v-else @click="addPhoto(1)") +
					view.pwr-bottom
						image(v-if="photos[2]" :src="photos[2]" mode="cover")
						button.photo-btn(v-else @click="addPhoto(2)") +
		// 关于我
		view.about-me
			view.title 关于我
			view.my-tag-entry(
				v-for="(item, index) in tagEntryList"
				:key="index"
				@click="goChooseTagsPage(item.value)"
			)
				view.tag-name {{ item.label }}
				view.arrow >
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				photos: ['', '' , ''],
				tagEntryList: [
					{ value: 4, label: '性格' },
					{ value: 1, label: '兴趣爱好' },
					{ value: 3, label: '食物' },
					{ value: 2, label: '旅行' },
				],
			}
		},
		methods: {
			addPhoto(index) {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						console.log(JSON.stringify(res.tempFilePaths))
						this.photos[index] = res.tempFilePaths[0]
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			goChooseTagsPage(type) {
				uni.navigateTo({
						url: `/pages/tags/tags?type=${type}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.edit-info {
		display: flex;
		flex-direction: column;
		padding: 20rpx 40rpx;
		.photos {
			.title {
				display: flex;
				align-items: center;
				margin-bottom: 40rpx;
				.main-t {
					font-size: 14px;
					color: #333;
				}
				.small-t {
					font-size: 10px;
					color: #999;
				}
			}
			.photo-wrap {
				display: flex;
				height: 300rpx;
				.pw-left {
					flex: 3;
					margin-right: 10rpx;
					border: 0.5px solid #ccc;
					display: flex;
					align-items: center;
				}
				.pw-right {
					flex: 2;
					display: flex;
					flex-direction: column;
					align-items: center;
					.pwr-top, .pwr-bottom {
						flex: 1;
						width: 100%;
						border: 0.5px solid #ccc;
					}
					.pwr-top {
						margin-bottom: 4rpx;
					}
				}
				.photo-btn {
					width: 100%;
					height: 100%;
					border: 0;
					background: #fff;
					font-size: 20px;
				}
				.photo-btn::after {
					border: 0;
				}
			}
		}
		.about-me {
			padding: 35rpx 0;
		}
		.title {
			color: #000;
			font-size: 14px;
			font-weight: 700;
		}
		.my-tag-entry {
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			padding: 10rpx 0;
			color: #ccc;
		}
	}
</style>
