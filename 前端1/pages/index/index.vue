<template>
<!-- 	<view class="content">
	<text>首页</text>
		</view> -->
		<view class="btn-row">
			<button type="primary" class="primary" @tap="toUserComment"><text class="word-btn-white">意见反馈</text></button>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				// title: 'Hello'
			}
		},
		onLoad() {
            
       
		},
		methods: {
			toUserComment(){
				uni.navigateTo({
					url:'/pages/UserComment/UserComment'
				})
			}
		}

	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.userOrgan{		
	}
	.btn-row{
		padding: 50px;
	}
	.btn-row[type=primary] {
		margin: 50% 50%;
		background-image: linear-gradient(to center, #66b7f9,#1c82d4);
	}

</style>
