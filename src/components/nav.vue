<template>
    <nav>
        <!-- <router-link to="/manage">Manage</router-link> |
      <router-link to="/manageStaff">ManageStaff</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/form">Form</router-link> -->
        <el-row :gutter="20" style="height: 20px;">
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
    name: 'navBar'
}
</script>