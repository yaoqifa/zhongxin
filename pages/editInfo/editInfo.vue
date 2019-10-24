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

		view.basic-info
			view.bi-title
				text.bit-l 基本信息
			view.item
				text.label 昵称
				input.right(v-model="form.nickName" maxlength="10" placeholder="点击填写")
			view.item
				text.label 微信号
				input.right(v-model="form.weixin" maxlength="20" placeholder="点击填写")
			view.item
				text.label 出生和星座
				view.right.date-constellation
					picker.date(mode="date" :value="form.curDate" :start="startDate" :end="endDate" @change="bindDateChange")
						text {{form.curDate || '点击填写'}}
					text.dot .
					picker.constellation(mode="selector" :value="constellationIndex" :range="constellationRange" @change="bindConstellationChange")
						text {{form.constellation || '点击填写'}}
			view.item
				text.label 身高
				picker.right(mode="selector" :value="heightIndex" :range="heightRange" @change="bindHeightChange")
					text {{form.height}}cm
			view.item
				text.label 毕业院校
				view.right.school-education
					input.school(v-model="form.school" maxlength="20" placeholder="请输入学校")
					text.dot .
					picker.education(mode="selector" :value="educationIndex" :range="educationRange" @change="bindEducationChange")
						text {{form.education || '点击填写'}}
			view.item
				text.label 所在城市
				picker.right(mode="region" :value="form.address" @change="bindAddressChange")
					text {{form.address.join(' ') || '点击填写'}}
</template>

<script>
	import { setArrayRange } from '@/utils/tool'

	export default {
		data() {
			return {
				title: 'Hello',
				photos: ['', '' , ''],
				form: {
					nickName: '',
					weixin: '',
					mobile: '',
					address: ["上海市", "杨浦区"],
					curDate: this.getDate('end'),
					height: '170',
					school: '',
					education: '硕士',
					constellation: '白羊座'
				},
				heightRange: setArrayRange(100, 230),
				heightIndex: 70,
				constellationIndex: 0,
				constellationRange: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
				educationRange: ['高中及以下', '大专', '本科', '硕士', '博士'],
				educationIndex: 2,
			}
		},
    computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
    },
		methods: {
			async getUserInfo() {
				const info = await getUserInfo();
			},
			addPhoto(index) {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.photos[index] = res.tempFilePaths[0]
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			getDate(type) {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()

				if (type === 'start') {
						year = year - 60
				} else if (type === 'end') {
						year = year - 18
				}
				month = month > 9 ? month : '0' + month
				day = day > 9 ? day : '0' + day
				return `${year}-${month}-${day}`
			},
			bindDateChange(e) {
				this.form.curDate = e.target.value
			},
			bindHeightChange(e) {
				this.heightIndex = e.target.value
				this.form.height = this.heightRange[this.heightIndex]
			},
			bindAddressChange(e) {
				this.form.address = e.target.value
			},
			bindEducationChange(e) {
				this.educationIndex = e.target.value
				this.form.education = this.educationRange[this.educationIndex]
			},
			bindConstellationChange(e) {
				this.constellationIndex = e.target.value
				this.form.constellation = this.constellationRange[this.constellationIndex]
			},
			goToPage(url) {
				if (!url) {
					return
				}
				uni.navigateTo({
					url
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
					border: 1px solid #ccc;
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
						border: 1px solid #ccc;
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
		.basic-info {
			margin-top: 50rpx;
			.bi-title {
				font-size: 16px;
				font-weight: bold;
				color: #333;
			}
			.item {
				display: flex;
				align-items: center;
				height: 80rpx;
				font-size: 12px;
				margin-bottom: 20rpx;
				.label {
					flex-basis: 140rpx;
					font-size: 13px;
				}
				.right {
					flex: 1;
					text-align: right;
					color: #999;
				}
				.date-constellation {
					display: flex;
					line-height: 30rpx;
					.date {
						flex: 1;
					}
					.constellation {
						flex-basis: 100rpx;
					}
				}
				.school-education {
					display: flex;
					align-items: center;
					.school {
						flex: 1;
					}
				}
				.dot {
					flex-basis: 10rpx;
					margin: 0 20rpx;
					line-height: 12px;
				}
			}
		}
	}
</style>
