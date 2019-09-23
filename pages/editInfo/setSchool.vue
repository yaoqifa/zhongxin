<template lang="pug">
  view.set-school
    input.search(v-model="school" maxlength="20" placeholder="请输入学校")
    view.list
      view.item(
        v-for="(item, index) in list"
        :key="index"
        @click="goBack"
      ) {{item}}
</template>

<script>
	export default {
		data() {
			return {
        school: '',
        list: ['清华大学', '北京大学', '北京邮电大学', '中国科学技术大学']
			}
		},
		onLoad() {

		},
		methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
	.set-school {
		.search {
      font-size: 14px;
      color: #666;
      height: 100rpx;
      text-indent: 1em;
      border-top: 20rpx solid #eee;
      border-bottom: 20rpx solid #eee;
    }
    .list {
      padding: 0 80rpx 0 40rpx;
      font-size: 12px;
      color: #999;
      .item {
        height: 100rpx;
        line-height: 100rpx;
        border-bottom: 1rpx solid #ccc;
      }
    }
	}
</style>
