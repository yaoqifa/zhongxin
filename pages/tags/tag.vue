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
	font-size: 15px;
	padding: 0 13rpx;
	color: #777;
	border: 1px solid #777;
	border-radius: 5px;
}
.selected {
	background-color: #343434;
	color: #fff;
}
</style>
