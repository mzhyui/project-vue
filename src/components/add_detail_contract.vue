<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm"
        :cell-style="{ 'text-align': 'left' }" labelPosition="left">
        <h1>签约记录</h1>
        <hr>
        <el-row :gutter="15" class="row-bg">
            <el-col :lg="12" :xs="12">
                <el-form-item label="编号" prop="id">
                    <el-input v-model="ruleForm.Id"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="名称" prop="id">
                    <el-input v-model="ruleForm.archiveId"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="状态" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="标题" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="服务项目名称" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="服务适用人群" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="服务内容" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="默认数据" prop="id">
                    <el-input v-model="ruleForm.basicCheck"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="基础套餐金额" prop="usageUnit">
                    <el-input v-model="ruleForm.usageUnit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="有效时长" prop="usageMethod">
                    <el-input v-model="ruleForm.usageMethod"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="辅助检查" prop="frequency">
                    <el-input v-model="ruleForm.frequency"></el-input>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :xs="12">
                <el-form-item label="尿液检查" prop="startDate">
                    <el-date-picker v-model="ruleForm.startDate" type="date"></el-date-picker>
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item label="用药情况" prop="status">
            <el-date-picker v-model="ruleForm.startDate" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="健教处方" prop="remark">
            <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <!-- <el-form-item label="创建时间" required>
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                        style="width: 200px;"></el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="更新时间" required>
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                        style="width: 200px;"></el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item> -->


    </el-form>
</template>

<style>
.el-form-item__label-wrap {
    margin-left: 0px !important;

}

/* .el-form-item__label {
    word-break: keep-all !important;
} */

.el-form-item__content {
    /* margin: 0 !important; */
    width: 300px;
    ;
}

.el-input.el-input--medium,
/* .el-select.el-select--medium {
    width: 100%;
} */

.el-form-item.el-form-item--medium {
    display: flex-start;
    justify-content: flex-start;
}
</style>

<script>
import 'element-ui/lib/theme-chalk/index.css'
// import 'el-form-model/lib/index.css'

// import Vue from 'vue'
// import ElFormModel from 'el-form-model'
// Vue.use(ElFormModel)

export default {
    name: 'addDetailContract',
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            fileList: [{
                name: 'sig.jpeg',
                url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
            }, {
                name: 'sig2.jpeg',
                url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
            }]
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
}
</script>