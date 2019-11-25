<template lang="pug">
	view.tag(
		:class="item.selected ? 'selected' : ''"
		@click="handleClick"
	) {{ item.label }}
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			handleClick() {
				this.item.selected = !this.item.selected;
				this.$emit('change', this.item);
			}
		}
	};
</script>

<style scoped lang="scss">
.tag {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 13px;
	padding: 0 12rpx;
	color: #666;
	border: 1px solid #666;
	border-radius: 10rpx;
}
.selected {
	background-color: #343434;
	color: #fff;
}
</style>
