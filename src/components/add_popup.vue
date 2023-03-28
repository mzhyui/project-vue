<template>
    <div>
        <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
            <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
                <el-form-item label="单行文本" prop="mobile">
                    <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                        prefix-icon='el-icon-mobile' :style="{ width: '100%' }"></el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field101">
                    <el-input v-model="formData.field101" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field102">
                    <el-input v-model="formData.field102" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field103">
                    <el-input v-model="formData.field103" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field104">
                    <el-input v-model="formData.field104" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field105">
                    <el-input v-model="formData.field105" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
                <el-form-item label="单行文本" prop="field106">
                    <el-input v-model="formData.field106" placeholder="请输入单行文本" clearable :style="{ width: '100%' }">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="handelConfirm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

export default {
    inheritAttrs: false,
    components: {},
    props: [],
    data() {
        return {
            formData: {
                mobile: undefined,
                field101: undefined,
                field102: undefined,
                field103: undefined,
                field104: undefined,
                field105: undefined,
                field106: undefined,
            },
            rules: {
                mobile: [{
                    required: true,
                    message: '请输入手机号',
                    trigger: 'blur'
                }, {
                    pattern: /^1(3|4|5|7|8|9)\d{9}$/,
                    message: '手机号格式错误',
                    trigger: 'blur'
                }],
                field101: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
                field102: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
                field103: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
                field104: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
                field105: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
                field106: [{
                    required: true,
                    message: '请输入单行文本',
                    trigger: 'blur'
                }],
            },
        }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
        onOpen() { },
        onClose() {
            this.$refs['elForm'].resetFields()
        },
        close() {
            this.$emit('update:visible', false)
        },
        handelConfirm() {
            this.$refs['elForm'].validate(valid => {
                if (!valid) return
                this.close()
            })
        },
    }
}
</script>
<style></style>
  
  export default {
    name: 'modal',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
    },
    methods: {
        hideModal() {
            this.$emit('hideModal')
        },

        submit() {
            this.$emit('submit')
        },
    }
}