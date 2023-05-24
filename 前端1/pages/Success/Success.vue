<template>
	<view class="btn-row">
			<button type="primary" class="primary" @tap="toIndex"><text class="word-btn-white">提交成功</text></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toIndex(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>
	.btn-row{
		padding: 50px;
	}
	.btn-row[type=primary] {
		margin: 50% 50%;
		background-image: linear-gradient(to center, #66b7f9,#1c82d4);
	}
</style>
