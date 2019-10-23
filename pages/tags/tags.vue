<template lang="pug">
	view.tags-container
		view.title 选择{{ tagTitleMap[type] }}关键词
			text.desc (最多选择10个标签)
		view.input-container
			input.input-style(
				v-model.trim="customizeTag"
				:placeholder="placeholder"
			)
			view.add-btn(@click="addTag") +
		view.tag-list
			tag.tag-style(
				v-for="(item, index) in tags"
				:key="index"
				:item="item"
				@change="handleSelectedChange"
			)
</template>

<script>
import { tagTitleMap, hobbyTags, travelTags, foodTags, characterTags } from './const.js';
import tag from './tag';

const tagMap = {
	1: hobbyTags,
	2: travelTags,
	3: foodTags,
	4: characterTags,
};

export default {
	components: {
		tag
	},
	data() {
		return {
			tagTitleMap,
			type: null,
			customizeTag: undefined,
			placeholder: '点击创建自己的关键词~',
			defaultTags: [0, 1, 2],
			tags: [],
		};
	},
  computed: {
    
  },
	onLoad(opts) {
		this.type = opts.type;
		this.initTags(tagMap[this.type], this.defaultTags);
	},
	mounted() {
	},
	methods: {
		initTags(tags, choosed) {
			this.tags = tags.map(({ value, label }) => {
				return {
					value,
					label,
					selected: choosed.includes(value)
				};
			});
		},
		handleSelectedChange(item) {
      for (let i = 0, len = this.tags.length; i < len; i += 1) {
        const cur = this.tags[i];
        if (cur.value === item.value) {
          this.tags.splice(i, 1, item);
          break;
        }
      }
		},
		addTag() {
			if (!this.customizeTag) return;
			const has = this.tags.some((p) => {
				return p.label === this.customizeTag;
			});
      console.log('has', has);
			if (has) {
				uni.showToast({
						title: `${this.customizeTag}标签已经存在`,
						duration: 2000
				});
				return;
			}
			this.tags.unshift({
				label: this.customizeTag,
				value: this.customizeTag,
				selected: true,
			});
		},
	},
}
</script>

<style lang="scss" scoped>
.tags-container {
	padding: 40rpx 25rpx 0;
	.title {
		font-size: 23px;
		color: #000;
		font-weight: 700;
		.desc {
			color: #ccc;
			font-size: 12px;
			font-weight: 300;
			margin-left: 3rpx;
		}
	}
	.input-container {
		padding: 31rpx 0 37rpx;
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		.input-style {
			outline: none;
			border: none;
			flex: 1;
		}
		.add-btn {
			background-color: #343434;
			color: #fff;
			width: 50rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			border-radius: 5px;
		}
	}
	.tag-list {
		display: flex;
		flex-wrap: wrap;
		.tag-style {
			margin: 0 20rpx 26rpx 0;
		}
	}
}
</style>
