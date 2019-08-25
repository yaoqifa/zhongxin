<script>
export default {
	onLaunch() {
		console.log('App Launch');

		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '32'
			});
			// uni.showTabBarRedDot({
			// 	index: 3
			// });
		}, 1000);
	},
	onShow() {
		console.log('App Show');
	},
	onHide() {
		console.log('App Hide');
	},
	onError(err) {
		console.log(err)
	}
};
</script>

<style>
/*每个页面公共css */
  @import './styles/index.scss';
</style>
