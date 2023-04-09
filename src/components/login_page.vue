<!-- todo set relative value -->
<template>
    <div class="container">
        <img src="@/assets/homepage.png" alt="My Image" class="img component-a">

        <el-form ref="form" :model="form" :rules="rules" class="login-box component-b">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号类型" prop="class">
                <el-select v-model="form.class" placeholder="请选择账号类型">
                    <el-option label="系统管理员" value="admin"></el-option>
                    <el-option label="医护" value="doctor"></el-option>
                    <el-option label="行政管理" value="nurse"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="账号" prop="name">
                <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
        </el-form>
        <!-- <el-form ref="form" :model="form" :rules="rules" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号类型" prop="class">
                <el-select v-model="form.class" placeholder="请选择账号类型">
                    <el-option label="系统管理员" value="admin"></el-option>
                    <el-option label="医护" value="doctor"></el-option>
                    <el-option label="行政管理" value="nurse"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="账号" prop="name">
                <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
        </el-form> -->
    </div>
</template>
  
<script>
export default {
    name: 'LoginComponents',
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('isLogin', 'true');
                    this.$store.dispatch("asyncUpdateUser", { name: this.form.name });
                    this.$router.push({ name: 'Main', params: { name: this.form.name } });
                } else {
                    this.$message({
                        message: '用户名或密码错误',
                        type: 'warning'
                    });
                    return false;
                }
            });
        }
    }
}
</script>
  
<style lang="scss" scoped>
.login-box {
    width: 20vw;
    height: 30vh;
    min-height: 400px;
    margin: 10vw auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    padding-left: 5vw;
    padding-right: 5vw;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
}

.login-title {
    text-align: center;
}
.container {
  position: relative; /* make the container a positioned element */
}

.img {
    // padding-left: 25vw;
    // padding-right: 10vb;
    height: 40vh;
    width: 30vw;
    min-height: 500px;
}
.component-b {
  position: relative; /* make Component B a positioned element */
  z-index: 1; /* set Component B's z-index to 1 */
  top: 30px;
//   padding-left: 30vw;
  margin-left: 45vw;
}

.component-a {
  position: absolute; /* position Component A absolutely */
  top: 0; /* position Component A at the top of the container */
  left: 0; /* position Component A at the left of the container */
  z-index: 2; /* set Component A's z-index to 2 to make it appear on top of Component B */
  margin-left: 16vw;

}
</style>