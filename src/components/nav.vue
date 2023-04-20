<template>
    <nav>
        <!-- <el-row :gutter="20" style="height: 20px;">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/manage" style="font-size: x-large;">患者管理</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/manageStaff" style="font-size: x-large;">医护管理</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"><router-link to="/add" style="font-size: x-large;">添加档案</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"><router-link to="/form" style="font-size: x-large;">数据视图</router-link>
                </div>
            </el-col>
        </el-row> -->
        <el-row :gutter="10" style="margin: 0;" type="flex">
            <el-col :span="20">
                <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item index="/my">个人首页</el-menu-item>
                    <el-menu-item index="/manage">
                        患者管理
                    </el-menu-item>
                    <el-menu-item index="/manageStaff">
                        医护管理
                    </el-menu-item>
                    <el-menu-item index="/add">添加档案</el-menu-item>
                    <el-menu-item index="/form">数据视图</el-menu-item>
                </el-menu></el-col>
            <el-col :span="4" style="display: flex; justify-content: center; align-items: center;">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            欢迎访问， {{ characterType }} <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="/my">个人信息</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>

        </el-row>
    </nav>
</template>

<style scoped>
nav {
    padding: 10px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}
</style>

<script>
// import Vue from 'vue'

// import { MessageBox } from 'element-ui'

// Vue.component(Message.name, Message)
// Vue.prototype.$message = Message

export default {
    name: 'navBar',
    data() {
        return {
            activeIndex: '/my',
            characterType: null,
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCommand(command) {
            this.$router.push(command)
        }

    },
    mounted() {
        // this.username = this.$store.state.username
        this.characterType = this.$route.query.characterType || '用户';
    },
    computed: {
        // username() {
        //     return this.$store.state.characterType;
        // }
    }
}

</script>