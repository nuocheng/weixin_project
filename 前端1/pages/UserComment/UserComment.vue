<template>
	<view class="comment">
		<uni-forms ref="customForm" :rules="customForm" :modelValue="customFormData" :label-position=left>
			<uni-forms-item label="姓名" required name="name" label-width=50>
				<uni-easyinput v-model="customFormData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="标题" required name="title" label-width=50>
				<uni-easyinput v-model="customFormData.title" placeholder="请输入标题" />
			</uni-forms-item>
			<uni-forms-item>
				<uni-easyinput type="textarea" v-model="customFormData.comment" placeholder="请输入意见正文" />
			</uni-forms-item>
			<uni-forms-item label="图片上传" v-model="customFormData.image" label-width=55>
				<view class="example-body">
					<uni-file-picker limit="3" title=" "></uni-file-picker>
				</view>
			</uni-forms-item>
			<uni-forms-item label="是否匿名" v-model="customFormData.anonymous" label-width=55>
				<switch @change="switch2Change" class="anonymousRight"/>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit('customForm')">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 校验规则
				// rules: {
				// 	name: {
				// 		rules: [{
				// 			required: true,
				// 			errorMessage: '姓名不能为空'
				// 		}]
				// 	},
				// 	title: {
				// 		rules: [{
				// 			required: true,
				// 			errorMessage: '标题不能为空'
				// 		}]
				// 	},
				// 	comment: {
				// 		rules: [{
				// 			required: true,
				// 			errorMessage: '正文内容不能为空'
				// 		}]
				// 	}
				// },
				// 自定义表单数据
				customFormData: {
					name: '',
					title: '',
					comment: '',
					image: '',
					anonymous: ''
				},
				// 自定义表单校验规则
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					title: {
						rules: [{
							required: true,
							errorMessage: '标题不能为空'
						}]
					},
					comment: {
						rules: [{
							required: true,
							errorMessage: '正文内容不能为空'
						}]
					},
				},		
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.customForm.setRules(this.customRules)
		},
		methods: {
			// onClickItem(e) {
			// 	console.log(e);
			// 	this.current = e.currentIndex
			// },
			// add() {
			// 	this.dynamicLists.push({
			// 		label: '域名',
			// 		rules: [{
			// 			'required': true,
			// 			errorMessage: '域名项必填'
			// 		}],
			// 		id: Date.now()
			// 	})
			// },
			// del(id) {
			// 	let index = this.dynamicLists.findIndex(v => v.id === id)
			// 	this.dynamicLists.splice(index, 1)
			// },
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					// uni.showToast({
					// 	title: `提交成功`,
					// 	showCancel:false,
						
					//})
					uni.navigateTo({
						url:'/pages/Success/Success'
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			switch2Change: function (e) {
				console.log('switch2 发生 change 事件，携带值为', e.detail.value)
			}
		}

	}
</script>


<style lang="scss">

	.comment {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
	.anonymousRight{
	    position: absolute;
	    right: 0;
	}
</style>


