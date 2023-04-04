<template>
    <el-container style="height: 80vh; border: 1px solid #eee">
        <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <div>
                    <el-button style="margin-top: 12px;" @click="submitForm('ruleForm')">保存草稿</el-button>
                </div>
                <div>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                </div>
                <div>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
            </el-menu>
        </el-aside> -->

        <el-container>
            <el-header style="text-align: left; font-size: 12px">
                <!-- <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>
                            <el-button type="text" @click="dialogFormVisible = true">新增</el-button>


                        </el-dropdown-item>

                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>管理员</span> -->
                <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

                <span style="font-size: large;">新增档案</span>
            </el-header>
            <el-main align="left">
                <div>
                    <el-tabs type="border-card">
                        <el-tab-pane label="医疗数据">
                            <add_detail_basic></add_detail_basic>
                        </el-tab-pane>
                        <el-tab-pane label="处方信息">
                            <add_detail_formulation></add_detail_formulation>
                        </el-tab-pane>
                        <el-tab-pane label="随访信息">
                            <add_detail_formulation></add_detail_formulation>
                        </el-tab-pane>
                        <el-tab-pane label="签约记录">
                            <add_detail_formulation></add_detail_formulation>
                        </el-tab-pane>
                    </el-tabs>

                </div>
            </el-main>
            <el-footer style="height: 15vh;background-color: aliceblue;">
                <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="25%"></el-step>
                    <el-step title="步骤2" description="50%"></el-step>
                    <el-step title="步骤3" description="75%"></el-step>
                    <el-step title="步骤4" description="100%"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="submitForm('ruleForm')">保存草稿</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

            </el-footer>
        </el-container>
    </el-container>
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
import add_detail_basic from './add_detail_basic.vue';
import addDetailFormulation from './add_detail_formulation.vue';
// import Vue from 'vue'
// import ElFormModel from 'el-form-model'
// Vue.use(ElFormModel)

export default {
    components: {
        'add_detail_basic': add_detail_basic,
        'add_detail_formulation': addDetailFormulation
    },
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
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>