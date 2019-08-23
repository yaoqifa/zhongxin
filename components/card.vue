<template>
  <div class="card">
    <image class="face" :src="info.url" mode="scaleToFill"/>
    <div class="info">
      <div class="top">
        <span class="name">{{ info.name }}</span>
        <span class="status" v-if="info.certifyStatus">已认证</span>
        <span class="intro">{{ info.introLength }}字</span>
      </div>
      <div class="bottom">
        <span class="sex">{{ info.sex }}</span>
        <span class="address">{{ info.address }}</span>
        <span class="age">{{ info.age }}</span>
        <span class="school"> {{ info.school }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-bottom: 20rpx;
}
.face {
  flex-basis: 200px;
  width: 100%;
  margin-bottom: 20rpx;
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
	.top {
	  flex: 1;
	  height: 40px;
	  display: flex;
		.name {
		  flex: 3;
		  font-size: 14px;
		  color: #333;
		  margin-right: 10rpx;
		}
		.status {
		  flex: 1;
		  font-size: 12px;
		  color: #0dc2b3;
		}
		.intro {
		  flex: 1;
		  align-self: flex-end;
		  font-size: 12px;
		  color: #aaa;
		}
	}
	.bottom {
	  flex: 1;
	  height: 40px;
	  display: flex;
		.sex, .address, .age {
			flex: 1;
			font-size: 12px;
			color: #999;
		}
		.school {
		  flex: 3;
		  font-size: 12px;
		  color: #999;
		}
	}
}

</style>

